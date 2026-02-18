// ============================
// PROJECT MODEL
// ============================

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide project title'],
        unique: true,
        trim: true,
        maxlength: [200, 'Project title cannot be more than 200 characters']
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please provide project description'],
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    longDescription: {
        type: String,
        default: null
    },
    technologies: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    url: {
        type: String,
        default: null
    },
    githubUrl: {
        type: String,
        default: null
    },
    demoUrl: {
        type: String,
        default: null
    },
    featured: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'desktop', 'backend', 'other'],
        default: 'other'
    },
    status: {
        type: String,
        enum: ['completed', 'in-progress', 'planned'],
        default: 'completed'
    },
    startDate: {
        type: Date,
        default: null
    },
    endDate: {
        type: Date,
        default: null
    },
    order: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// Pre-save hook to generate slug
projectSchema.pre('save', function(next) {
    if (this.isModified('title')) {
        this.slug = this.title.toLowerCase().replace(/[^\w-]/g, '-').replace(/-+/g, '-');
    }
    next();
});

// Index for faster queries
projectSchema.index({ featured: 1, createdAt: -1 });
projectSchema.index({ category: 1 });
projectSchema.index({ slug: 1 });

module.exports = mongoose.model('Project', projectSchema);
