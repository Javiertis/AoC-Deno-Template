#!/bin/bash
if [[ $2 ]]; then
  deno run --allow-net day$1/problem$2.ts
elif [[ $1 ]]; then
  deno run --allow-net day$1/problem1.ts
  deno run --allow-net day$1/problem2.ts
else
  echo 'HELP:
     Run ./runProblem.sh [day] [problem] or ./runProblem.sh [day]'
fi;
