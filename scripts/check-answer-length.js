#!/usr/bin/env node
// Lints questions.js for "longest answer wins" cheese: flags any question where
// the correct answer's character length exceeds the longest wrong option's length
// by more than the allowed ratio (default 1.1x).
//
// Usage: node scripts/check-answer-length.js [--ratio=1.1] [--topic=astronomy] [--json]

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const ratioArg = args.find(a => a.startsWith('--ratio='));
const topicArg = args.find(a => a.startsWith('--topic='));
const jsonOut = args.includes('--json');
const maxRatio = ratioArg ? parseFloat(ratioArg.split('=')[1]) : 1.1;
const topicFilter = topicArg ? topicArg.split('=')[1] : null;

const questionsPath = path.join(__dirname, '..', 'questions.js');
const src = fs.readFileSync(questionsPath, 'utf8');
const TOPICS = new Function(src + '\nreturn TOPICS;')();

const flagged = [];
let total = 0;

for (const topic of TOPICS) {
  if (topicFilter && topic.id !== topicFilter) continue;
  topic.questions.forEach((q, idx) => {
    total++;
    const correct = q.opts[q.a];
    const wrongs = q.opts.filter((_, i) => i !== q.a);
    const maxWrong = Math.max(...wrongs.map(o => o.length));
    const ratio = maxWrong === 0 ? Infinity : correct.length / maxWrong;
    if (ratio > maxRatio) {
      flagged.push({
        topic: topic.id,
        index: idx,
        q: q.q,
        opts: q.opts,
        a: q.a,
        ratio: Math.round(ratio * 100) / 100,
        correctLen: correct.length,
        maxWrongLen: maxWrong
      });
    }
  });
}

if (jsonOut) {
  console.log(JSON.stringify({ total, flaggedCount: flagged.length, maxRatio, flagged }, null, 2));
} else {
  flagged
    .sort((a, b) => b.ratio - a.ratio)
    .forEach(f => {
      console.log(`[${f.topic}#${f.index}] ratio=${f.ratio} (${f.correctLen} vs ${f.maxWrongLen}) :: ${f.q}`);
    });
  console.log(`\n${flagged.length} / ${total} questions exceed ratio ${maxRatio}`);
}

// Non-zero exit fails CI / pre-commit when any question is cheesable, so
// regressions in future question additions get caught automatically.
process.exit(flagged.length > 0 ? 1 : 0);
