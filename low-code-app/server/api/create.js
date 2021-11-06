const router = require('express').Router();
const fs = require('fs');
const path = require('path');

module.exports = router;

// POST /api/create
// handles -create new directory
router.post('/', async (req, res, next) => {
  try {
    // NEW PROJECT
    await fs.mkdir(path.join(__dirname, '..', '..', 'newProject'), null, (err) => { console.log(err)});

      // NEW PROJECT > SRC
      await fs.mkdir(path.join(__dirname, '..', '..', 'newProject', 'src'), null, (err) => { console.log(err)});

        // NEW PROJECT > SRC > COMPONENTS
        await fs.mkdir(path.join(__dirname, '..', '..', 'newProject', 'src', 'components'), null, (err) => { console.log(err)});

          // NEW PROJECT > SRC > COMPONENTS > App.js
          await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'src', 'App.js'), path.join(__dirname, '..', '..', 'newProject', 'src', 'components', 'App.js'), null, (err) => { console.log(err)})

        // NEW PROJECT > SRC > index.js
        await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'src', 'index.js'), path.join(__dirname, '..', '..', 'newProject', 'src', 'index.js'), null, (err) => { console.log(err)})

      // NEW PROJECT > SERVER
      await fs.mkdir(path.join(__dirname, '..', '..', 'newProject', 'server'), null, (err) => { console.log(err)});

        // NEW PROJECT > SERVER > index.js
        await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'server', 'index.js'), path.join(__dirname, '..', '..', 'newProject', 'server', 'index.js'), null, (err) => { console.log(err)})

        // NEW PROJECT > SERVER > app.js
        await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'server', 'app.js'), path.join(__dirname, '..', '..', 'newProject', 'server', 'app.js'), null, (err) => { console.log(err)})

      // NEW PROJECT > PUBLIC
      await fs.mkdir(path.join(__dirname, '..', '..', 'newProject', 'public'), null, (err) => { console.log(err)});

        // NEW PROJECT > PUBLIC > index.html
        await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'public', 'index.html'), path.join(__dirname, '..', '..', 'newProject', 'public', 'index.html'), null, (err) => { console.log(err)})

        // NEW PROJECT > PUBLIC > style.css
        await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'public', 'style.css'), path.join(__dirname, '..', '..', 'newProject', 'public', 'style.css'), null, (err) => { console.log(err)})

        // NEW PROJECT > PUBLIC > IMAGES
        await fs.mkdir(path.join(__dirname, '..', '..', 'newProject', 'public', 'images'), null, (err) => { console.log(err)});
      
      // // NEW PROJECT > portfolioData.js
      // await fs.writeFile(path.join(__dirname, '..', '..', 'newProject', 'portfolioData.js'), `export const portName = []; export const technologies = []; export const github = []; export const link = []; export const portDescription = [];`, (err) => { console.log(err)})
  }
  catch (error) {
    next(error);
  }
});

// POST /api/create/homeData
// handles -create new file
router.post('/homeData', async (req, res, next) => {
    const { name, title, description } = req.body;

    try {
      // NEW PROJECT > homeData.js
      await fs.writeFile(path.join(__dirname, '..', '..', 'newProject', 'homeData.js'), `export const name = ${JSON.stringify(name)}; export const title = ${JSON.stringify(title)}; export const description = ${JSON.stringify(description)};`, (err) => { console.log(err)})

      // NEW PROJECT > SRC > COMPONENTS > Home.js
      await fs.copyFile(path.join(__dirname, '..', '..', 'lowCode', 'src', 'Home.js'), path.join(__dirname, '..', '..', 'newProject', 'src', 'components', 'Home.js'), null, (err) => { console.log(err)})
    }
    catch (error) {
      next(error);
    }
  });

// POST /api/create/portfolioData
// handles -create new file
router.post('/portfolioData', async (req, res, next) => {
  // const portfolioData = require('../../newProject/portfolioData.js');
  const { portName, technologies, github, link, portDescription } = req.body;
  // portName = portfolioData.portName.push(portName);

  try {
    await fs.writeFile(path.join(__dirname, '..', '..', 'newProject', 'portfolioData.js'), `export const portName = [${JSON.stringify(portName)}]; export const technologies = [${JSON.stringify(technologies)}]; export const github = [${JSON.stringify(github)}]; export const link = [${JSON.stringify(link)}]; export const portDescription = [${JSON.stringify(portDescription)}];`, (err) => { console.log(err)})
  }
  catch (error) {
    next(error);
  }
});

// const fs = require('fs')

// const path = './file.txt'

// try {
//   if (fs.existsSync(path)) {
//     //file exists
//   }
// } catch(err) {
//   console.error(err)
// }