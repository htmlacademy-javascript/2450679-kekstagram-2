
const PHOTOS_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Ольга', 'Сергей', 'Елена', 'Дмитрий', 'Мария', 'Иван', 'Анна'];

const PHOTO_DESCRIPTIONS = [
  'Закат над океаном, волны разбиваются о берег.',
  'Портрет молодой женщины с яркими глазами и улыбкой.',
  'Панорамный вид на шумный мегаполис с высоты птичьего полета.',
  'Группа друзей наслаждается пикником на солнечном пляже.',
  'Забавный котенок играет с клубком ниток на уютном ковре.',
  'Могучие горы, увенчанные снежными вершинами, под ясным небом.',
  'Ароматный кофе в белой чашке, украшенный нежной пенкой.',
  'Букет из разноцветных полевых цветов в старинном глиняном кувшине.',
  'Старинный деревянный дом, окруженный пышным зеленым садом.',
  'Детишки строят песочный замок на берегу моря.',
  'Солнечные лучи пробиваются сквозь листву деревьев в летнем лесу.',
  'Яркая абстрактная картина с динамичными мазками кисти.',
  'Преданный пес с добрыми глазами смотрит в объектив камеры.',
  'Вид на вечерний город с моста, освещенный огнями фонарей.',
  'Нежно-розовый закат окрашивает небо в пастельные тона.',
  'Вкусный ужин из свежих овощей и фруктов на деревянном столе.',
  'Стильный мужчина в элегантном костюме позирует для фотографии.',
  'Уютная лесная тропинка, усыпанная опавшими листьями.',
  'Спокойная гладь озера отражает голубое небо без единого облачка.',
  'Ретро-автомобиль яркого цвета стоит на фоне старого здания.',
  'Влюбленная пара танцует под звездным небом летней ночью.',
  'Аппетитный кусочек шоколадного торта, украшенный свежими ягодами.',
  'Крупный план цветка с каплями росы на лепестках.',
  'Ночной город сияет тысячами огней, создавая завораживающее зрелище.',
  'Идиллический пейзаж с зелеными полями и живописными холмами.'
];

function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAvatar() {
  return `img/avatar-${getRandomInt(1, 6)}.svg`;
}

function getRandomComment() {
  const numMessages = getRandomInt(1, 2);
  return MESSAGES.slice(0, numMessages).join(' ').trim();
}


function generateComment(id) {
  return {
    id,
    avatar: getRandomAvatar(),
    message: getRandomComment(),
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
}


function generateComments(numComments) {
  const comments = [];
  const usedIds = new Set();

  for (let i = 0; i < numComments; i++) {
    let id;
    do {
      id = getRandomInt(1, 1000);
    } while (usedIds.has(id));
    usedIds.add(id);
    comments.push(generateComment(id));
  }
  return comments;
}

function getRandomLikes() {
  return getRandomInt(15, 200);
}

const photos = [];
for (let i = 0; i < PHOTOS_COUNT; i++) {
  const photo = {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: PHOTO_DESCRIPTIONS[i] || 'Описание отсутствует',
    likes: getRandomLikes(),
    comments: generateComments(getRandomInt(0, 30)),
  };
  photos.push(photo);
}

console.table(photos);
