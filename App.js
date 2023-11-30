function getCosmeticsByBodyPart(bodyPart) {
    switch (bodyPart) {
      case 'волосся':
        return ['шампунь', 'кондиціонер', 'олія для волосся'];
      case 'обличчя':
        return ['очищувач', 'тонік', 'крем для обличчя'];
      case 'тіло':
        return ['гель для душу', 'лосьйон для тіла', 'пілінг'];
      default:
        return [];
    }
  }
  
  var bodyPart = prompt('Введіть назву тіла (волосся, обличчя, тіло):');
  
  var cosmetics = getCosmeticsByBodyPart(bodyPart);
  if (cosmetics.length > 0) {
    console.log('Косметика для ' + bodyPart + ':');
    console.log(cosmetics.join(', '));
  } else {
    console.log('Вибрано невірну назву тіла.');
  }