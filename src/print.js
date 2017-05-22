import _ from 'lodash';
import pdf from 'jspdf/dist/jspdf.min';

function centeredText(doc, text) {
  const futureSize = doc.getStringUnitWidth(text) * doc.internal.getFontSize();
  const textWidth = futureSize / doc.internal.scaleFactor;
  return (doc.internal.pageSize.width - textWidth) / 2;
}

export default function print(theme, requirements, rows, columns) {
  const doc = pdf({
    orientation: 'landscape',
  });

  doc.setFontSize(42);
  doc.text(theme, centeredText(doc, theme), 14);

  doc.setFontSize(28);

  _.forEach(requirements.split('\n'),
    (rule, i) => doc.text(rule, centeredText(doc, rule), 30 + (14 * i)));

  const offset = {
    x: 20,
    y: 40,
  };

  const width = (doc.internal.pageSize.width - (offset.x * 2)) / columns;
  const height = (doc.internal.pageSize.height - (offset.y * 2)) / rows;

  _.range(0, columns)
      .map(x =>
        _.range(0, rows)
          .map(y => doc.rect((width * x) + offset.x, (height * y) + offset.y + 20, width, height)));

  doc.save('x-effect.pdf');
}
