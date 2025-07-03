# AI Chef

Project built with React.js, Vite, and the Hugging Face AI API. Just enter a few ingredients and get started with brainstorming recipe ideas!

### Setup Instructions

#### 1. **Clone the Repository**

```bash
git clone https://github.com/mg224/ai-chef.git
cd ai-chef
```

#### 2. **Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed (recommended: Node 16+).

```bash
npm install
# or
yarn install
```

#### 3. **Set Up Environment Variables**

Create a `.env` file in the root directory and add your Hugging Face API access token:

```env
VITE_HF_ACCESS_TOKEN=your_huggingface_api_access_token
```

> If you're using Create React App (CRA), prefix the variable with `REACT_APP_` instead:
>
> ```env
> REACT_APP_HF_ACCESS_TOKEN=your_huggingface_api_access_token
> ```

> Never commit your `.env` file to version control!

#### 4. **Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

#### 5. **Using the Hugging Face API**

This app connects to a Hugging Face model via their hosted inference API. You can customize the model or endpoint in the code in `ai.js`

> 🔗 See the [Hugging Face Inference API Docs](https://huggingface.co/docs/api-inference/index) for more details.
