module.exports = ({engineername}) => {
  const date = new Date();
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>${engineername}</h1>
</body>
</html>
 `;
};
