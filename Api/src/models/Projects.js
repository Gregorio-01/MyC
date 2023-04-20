import mongoose, { Schema } from 'mongoose';



const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
});

const ProjectModel = mongoose.model('Projects', ProjectSchema);

export default ProjectModel;