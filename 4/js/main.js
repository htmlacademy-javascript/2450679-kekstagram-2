  
const PHOTOS_COUNT = 25;

const messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const names = ["Артём", "Ольга", "Сергей", "Елена", "Дмитрий", "Мария", "Иван", "Анна"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAvatar() {
  return `img/avatar-${getRandomInt(1, 6)}.svg`;
}

function generateComments(numComments) {
  const comments = [];
  const usedIds = new Set(); // объявление здесь

  for (let i = 0; i < numComments; i++) {
    let id;
    do {
      id = getRandomInt(1, 1000);
    } while (usedIds.has(id));
    usedIds.add(id);

    const numMessages = getRandomInt(1, 2);
    let message = "";
    for (let j = 0; j < numMessages; j++) {
      message += messages[getRandomInt(0, messages.length - 1)] + " ";
    }
    message = message.trim();

    comments.push({
      id: id,
      avatar: getRandomAvatar(),
      message: message,
      name: names[getRandomInt(0, names.length - 1)],
    });
  }
  return comments;
}

function getRandomLikes() {
  return Math.floor(Math.random() * (200 - 15 + 1)) + 15;
}

const photoDescriptions = [
  "Закат над океаном, волны разбиваются о берег.",
  "Портрет улыбающейся женщины на фоне цветущего сада.",
  "Вид с высоты птичьего полета на город ночью, огни мерцают.",
  "Группа друзей веселится на пляже, лето.",
  "Маленький котёнок спит, свернувшись калачиком.",
  "Горный пейзаж, заснеженные вершины гор.",
  "Чашка ароматного кофе на деревянном столе.",
  "Яркий букет цветов, разноцветные тюльпаны.",
  "Старинный дом, покрытый плющом.",
  "Дети играют в песке на берегу моря.",
  "Солнечный день, деревья в зелени.",
  "Абстрактная картина, яркие краски.",
  "Милая собака смотрит в камеру.",
  "Вид на город с моста, движение машин.",
  "Красивый закат, небо окрашено в яркие цвета.",
  "Еда на столе, вкусный ужин.",
  "Портрет мужчины в деловом костюме.",
  "Живописный лес, деревья и солнечные лучи.",
  "Вид на озеро, спокойная вода, отражение неба.",
  "Старый автомобиль, ретро стиль.",
  "Пара танцует на улице, романтический вечер.",
  "Кусочек торта, украшенный ягодами.",
  "Крупный план цветка, капли росы.",
  "Ночной город, небо усеяно звездами.",
  "Пейзаж с полями и деревенскими домами."
];


let photoId = 0;
const photos = Array.from({ length: PHOTOS_COUNT }, () => ({
  id: ++photoId,
  url: `photos/${photoId}.jpg`,
  description: photoDescriptions[photoId - 1],
  likes: getRandomLikes(),
  comments: generateComments(getRandomInt(0, 30)),
}));

console.table(photos);
