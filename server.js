const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const cors = require('cors')

app.use(cors())


// app config
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));


app.use(express.static(__dirname));

const bodyParser = require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);


const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session())



/* GCP START */
// Imports the Secret Manager library
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

// Instantiates a client
const client = new SecretManagerServiceClient();

async function accessSecretVersion(name = 'projects/1093506486018/secrets/ATLAS_URI/versions/2') {
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const uri = version.payload.data.toString();

  // WARNING: Do not print the secret in a production environment - this
  // snippet is showing how to access the secret material.
  console.info(`Payload: ${uri}`);


  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  const connection = mongoose.connection
  connection.once('open', ()=>{
      console.log("MongoDB Atlas connected")
  })


  return payload
}

const dev = true 

if(dev){
  const uri = "mongodb+srv://jim:fvS4lESuxYbsRDA1@cluster0.evv74.mongodb.net/etoot?retryWrites=true&w=majority"

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  const connection = mongoose.connection
  connection.once('open', ()=>{
      console.log("MongoDB Atlas connected")
  })
}
else{
  accessSecretVersion()
}
/* GCP END */



// passport mongoose set up
const userDetail = require('./models/user')
const passportLocalMongoose = require('passport-local-mongoose');
userDetail.plugin(passportLocalMongoose)
const UserDetails = mongoose.model('userInfo', userDetail, 'userInfo')

/* PASSPORT LOCAL AUTHENTICATION */

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());





app.use(express.urlencoded({extended: false}))


const methodOverride = require('method-override')
app.use(methodOverride('_method'))



const tutorRouter = require('./routes/tutor');
const authRouter = require('./routes/auth')
const appRouter = require('./routes/appointment')
const path = require('path')


app.use('/tutor', tutorRouter)
app.use('/', authRouter)
app.use('/app', appRouter)

// test a3
const testRouter = require('./routes/test')
app.use('/test', testRouter)


app.set('view engine', 'ejs')

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}



// app.get('/', async(req, res)=>{
//   const tutors = await UserDetails.find().sort({
//       createdAt: 'desc'
//   })



//   if(req.user && req.user.admin === true){
//     res.redirect("/admin");
//   }
//   else{
//     res.render('tutor/index', { tutor : tutors})
//   }
// })
