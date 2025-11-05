# Traffic Sign Classification

A deep learning-based traffic sign classification system that can identify and classify 43 different types of traffic signs in real-time. The system supports both image upload classification and live webcam feed classification.

## Features

- 🚦 **43 Traffic Sign Classes**: Classifies various traffic signs including speed limits, warnings, prohibitions, and directional signs
- 📸 **Image Upload Classification**: Upload images of traffic signs for instant classification
- 🎥 **Real-time Video Feed**: Live webcam classification with real-time predictions
- 🤖 **Deep Learning Model**: Built using ResNet50 architecture with TensorFlow/Keras
- 🌐 **Full-stack Application**: React frontend with Flask backend API
- 📊 **Confidence Scores**: Displays prediction confidence percentages

## Traffic Sign Classes

The model can classify the following 43 traffic sign types:

- Speed limits (20km/h, 30km/h, 50km/h, 60km/h, 70km/h, 80km/h, 100km/h, 120km/h)
- End of speed limits
- No passing signs
- Priority road and yield signs
- Stop signs
- Vehicle restrictions
- General caution and danger warnings
- Curve warnings (left, right, double)
- Road condition warnings (bumpy, slippery, narrow)
- Road work and traffic signals
- Pedestrian and children crossing signs
- Directional signs (turn left/right, ahead only, roundabout)
- And more...

## Project Structure

```
Traffic_Sign_Classification/
├── backend/
│   ├── app.py                 # Flask backend API
│   ├── requirements.txt       # Python dependencies
│   ├── Traffic_Sign_Model.h5  # Trained model
│   └── static/
│       └── uploads/           # Uploaded images storage
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ImageClassification.jsx
│   │   │   ├── VideoFeed.jsx
│   │   │   ├── Welcome.jsx
│   │   │   └── ...
│   │   ├── views/             # Page views
│   │   └── App.jsx            # Main app component
│   ├── package.json
│   └── ...
├── TrafficSign_ResNet.ipynb   # Model training notebook
├── Evaluation.ipynb           # Model evaluation notebook
└── README.md
```

## Prerequisites

- Python 3.8+
- Node.js 16+ and npm
- Webcam (for real-time classification feature)

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

## Usage

### Running the Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Start the Flask server:
```bash
python app.py
```

The backend will run on `http://localhost:5000` (default Flask port).

### Running the Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default port).

### Using the Application

1. **Image Classification**:
   - Navigate to the image classification section
   - Upload an image of a traffic sign
   - View the classification result with confidence score

2. **Real-time Video Feed**:
   - Navigate to the video feed section
   - Click to start the webcam
   - Point the camera at traffic signs to see real-time classifications
   - Click to stop the feed when done

## API Endpoints

### `POST /classify_image`
Classifies an uploaded traffic sign image.

**Request**: Multipart form data with image file
**Response**: JSON with `class_name`, `probability`, and `image_path`

### `GET /video_feed`
Streams real-time video feed with traffic sign classifications.

### `POST /stop_feed`
Stops the video feed and releases the webcam.

## Model Details

- **Architecture**: ResNet50 (Transfer Learning)
- **Input Size**: 32x32 pixels (grayscale)
- **Classes**: 43 traffic sign types
- **Framework**: TensorFlow/Keras
- **Training**: See `TrafficSign_ResNet.ipynb` for training details

## Technologies Used

### Backend
- Flask - Web framework
- TensorFlow/Keras - Deep learning framework
- OpenCV - Image processing
- NumPy - Numerical computations

### Frontend
- React - UI framework
- Vite - Build tool
- Tailwind CSS - Styling
- Axios - HTTP client
- React Router - Routing

## Development

### Model Training

To train or retrain the model, use the Jupyter notebooks:
- `TrafficSign_ResNet.ipynb` - Model training with ResNet50
- `Evaluation.ipynb` - Model evaluation and metrics

### Building for Production

**Frontend**:
```bash
cd frontend
npm run build
```

The built files will be in the `frontend/dist` directory.

## License

This project is part of a BSc (Hons) degree project.

## Contributing

This is an academic project. For improvements or suggestions, please open an issue.

## Acknowledgments

- German Traffic Sign Recognition Benchmark (GTSRB) dataset for training
- ResNet50 architecture for transfer learning

