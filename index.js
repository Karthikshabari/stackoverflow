import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/user.js';
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://mushasri:stack-clone@cluster0.zrtffry.mongodb.net/stack-clone?retryWrites=true&w=majority";


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); }))
  .catch((err) => console.log(err.message));

