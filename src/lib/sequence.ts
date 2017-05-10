import * as Promise from 'bluebird';

var count = 0;


export function sequence(_steps: any[]) {
  return new Promise(function (resolve, reject) {
    console.log(count)

    let fn = _steps[0];
    if (!fn) {
      return resolve();
    }

    (Array.isArray(fn) ? sequence(fn) : fn)().then((res: any) => {
      _steps.shift()
      count = 0;
      sequence(_steps)
    }).catch((err: SeqError) => {

      if (count > 50) {
        return reject({ message: `${fn.toString()} failed !!!!!`, remainingSteps: _steps });
      }

      count += 1;

      setTimeout(() => {
        sequence(_steps);
      }, 50)

    })
  })
}


interface SeqError {
  message: string, remainingSteps: any[]
}
