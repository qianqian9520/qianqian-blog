const Fontmin = require('fontmin');
const path = require('path');

const text = '千千的星际日志我们曾经仰望星空思索我们在星辰中的位置爱是唯一可以穿越时间与空间的事物不要温和地走进那个良夜穿越星海记录成长欢迎来到在数据的引力场中寻找属于自己的虫洞';

const fontmin = new Fontmin()
  .src(path.join(__dirname, '../source/fonts/ma-shan-zheng.ttf'))
  .use(Fontmin.glyph({ text, hinting: false }))
  .dest(path.join(__dirname, '../source/fonts'));

fontmin.run((err) => {
  if (err) throw err;
  console.log('Font subset complete');
});
