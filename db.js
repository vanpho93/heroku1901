const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mean1901');
// mongoose.connect('mongodb://pho:123456@ds147711.mlab.com:47711/mean1901');

const URI = process.env.PORT ? 'mongodb://pho:123456@ds147711.mlab.com:47711/mean1901' : 'mongodb://localhost/mean1901';
mongoose.connect(URI);

const singerSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    link: { type: String, trim: true, required: true, unique: true }
});
const Singer = mongoose.model('Singer', singerSchema);

module.exports = { Singer };
/*
[    
    { name: 'Karik', link: 'https://mp3.zing.vn/nghe-si/Karik', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/a/0/a0927398989d4c5b18c56880bd56442b_1509531352.jpg' },
    { name: 'Đức Phúc', link: 'https://mp3.zing.vn/nghe-si/Duc-Phuc', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg'},
    { name: 'Châu Khải Phong', link: 'https://mp3.zing.vn/nghe-si/Chau-Khai-Phong', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/a/ca59799621e1c9fd8652cd947713acfa_1509951552.jpg' }
]
*/
