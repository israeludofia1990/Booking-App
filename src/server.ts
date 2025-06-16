import app from './app';

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//import app from './app.js';

//const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});