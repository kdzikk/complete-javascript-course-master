'use strict';

const calcAge = birthYear => {
  const age = 2037 - birthYear;

  function prinAge() {
    const output = `You are ${age} years old, born in ${birthYear}`;
    console.log(output);
  }


  }

  prinAge();
  return age;
};

const firstName = 'Kamil';
calcAge(1997);
