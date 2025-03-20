/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// type ColoredAnimal = 'red-dog' | 'red-cat' | ...

type ColoredAnimal = `${Color}-${Animal}`;


const animal: ColoredAnimal = 'red-dog';

const anima2: ColoredAnimal = 'red-cat';