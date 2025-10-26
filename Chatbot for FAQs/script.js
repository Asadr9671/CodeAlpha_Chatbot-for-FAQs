// FAQ Chatbot with NLP - JavaScript

// Comprehensive FAQ Database
const faqDatabase = [
    {
        question: "What is Artificial Intelligence?",
        answer: "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. It includes capabilities such as learning, reasoning, problem-solving, perception, and language understanding. AI can be categorized into narrow AI (designed for specific tasks) and general AI (theoretical systems with human-like intelligence).",
        keywords: ["ai", "artificial", "intelligence", "definition", "what is ai"]
    },
    {
        question: "What is Machine Learning?",
        answer: "Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms use statistical techniques to find patterns in data and make predictions or decisions. The three main types are supervised learning, unsupervised learning, and reinforcement learning.",
        keywords: ["machine", "learning", "ml", "definition", "what is ml", "algorithms"]
    },
    {
        question: "What is Deep Learning?",
        answer: "Deep Learning is a subset of machine learning based on artificial neural networks with multiple layers (hence 'deep'). It excels at processing large amounts of unstructured data like images, audio, and text. Deep learning powers many modern AI applications including image recognition, natural language processing, and autonomous vehicles.",
        keywords: ["deep", "learning", "neural", "networks", "dl", "what is deep learning"]
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in AI, machine learning, web development, data analysis, and scientific computing. Python has extensive libraries like NumPy, Pandas, TensorFlow, and PyTorch that make it ideal for AI development.",
        keywords: ["python", "programming", "language", "code", "what is python"]
    },
    {
        question: "What is Natural Language Processing?",
        answer: "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and generate human language. NLP combines computational linguistics with machine learning and deep learning. Applications include chatbots, translation services, sentiment analysis, and voice assistants like Siri and Alexa.",
        keywords: ["nlp", "natural", "language", "processing", "text", "linguistics"]
    },
    {
        question: "What is a Neural Network?",
        answer: "A Neural Network is a computing system inspired by biological neural networks in the human brain. It consists of interconnected nodes (neurons) organized in layers that process information and learn patterns from data. Neural networks are fundamental to deep learning and are used in image recognition, speech recognition, and many other AI tasks.",
        keywords: ["neural", "network", "neurons", "deep learning", "brain", "ann"]
    },
    {
        question: "What is supervised learning?",
        answer: "Supervised Learning is a machine learning approach where the algorithm learns from labeled training data. The model is trained on input-output pairs and learns to map inputs to correct outputs. Common applications include spam detection, image classification, and price prediction. Examples include linear regression, decision trees, and support vector machines.",
        keywords: ["supervised", "learning", "labeled", "training", "classification"]
    },
    {
        question: "What is unsupervised learning?",
        answer: "Unsupervised Learning is a machine learning approach where algorithms learn patterns from unlabeled data without predefined categories or labels. The system tries to find hidden structures in the data. Common techniques include clustering (grouping similar items) and dimensionality reduction. Applications include customer segmentation and anomaly detection.",
        keywords: ["unsupervised", "learning", "clustering", "unlabeled", "patterns"]
    },
    {
        question: "What is reinforcement learning?",
        answer: "Reinforcement Learning is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties for its actions and learns to maximize cumulative rewards over time. It's used in robotics, game playing (like AlphaGo), autonomous vehicles, and recommendation systems.",
        keywords: ["reinforcement", "learning", "agent", "rewards", "environment", "rl"]
    },
    {
        question: "What is computer vision?",
        answer: "Computer Vision is an AI field that trains computers to interpret and understand visual information from the world. It involves acquiring, processing, analyzing, and understanding images and videos. Applications include facial recognition, object detection, medical image analysis, autonomous vehicles, and augmented reality.",
        keywords: ["computer", "vision", "image", "recognition", "visual", "cv"]
    },
    {
        question: "What is TensorFlow?",
        answer: "TensorFlow is an open-source machine learning framework developed by Google. It's widely used for building and training neural networks and deep learning models. TensorFlow provides tools for both research and production, supports multiple programming languages, and can run on CPUs, GPUs, and TPUs for efficient computation.",
        keywords: ["tensorflow", "framework", "google", "ml", "library"]
    },
    {
        question: "What is PyTorch?",
        answer: "PyTorch is an open-source machine learning library developed by Facebook. It's popular for its dynamic computational graphs, ease of use, and strong support for GPU acceleration. PyTorch is widely used in research and production for deep learning applications, particularly in computer vision and natural language processing.",
        keywords: ["pytorch", "framework", "facebook", "deep learning", "library"]
    },
    {
        question: "What are data structures?",
        answer: "Data Structures are specialized formats for organizing, storing, and managing data in computer memory. Common data structures include arrays, linked lists, stacks, queues, trees, graphs, and hash tables. Choosing the right data structure is crucial for efficient algorithm performance and solving computational problems.",
        keywords: ["data", "structures", "arrays", "lists", "trees", "algorithms"]
    },
    {
        question: "What is web development?",
        answer: "Web Development is the process of building and maintaining websites and web applications. It includes frontend development (HTML, CSS, JavaScript for user interfaces), backend development (server-side logic, databases), and full-stack development (both). Modern web development uses frameworks like React, Angular, Vue.js, Node.js, and Django.",
        keywords: ["web", "development", "html", "css", "javascript", "frontend", "backend"]
    },
    {
        question: "What is a REST API?",
        answer: "REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on resources. REST APIs are stateless, scalable, and use standard HTTP methods like GET, POST, PUT, and DELETE. They're fundamental to modern web services.",
        keywords: ["rest", "api", "http", "web", "services", "endpoint"]
    },
    {
        question: "How do I start learning AI?",
        answer: "To start learning AI: 1) Learn Python programming basics, 2) Study mathematics (linear algebra, calculus, statistics), 3) Understand machine learning fundamentals, 4) Take online courses (Coursera, edX, fast.ai), 5) Practice with datasets on Kaggle, 6) Build projects, 7) Read research papers, and 8) Join AI communities. Start with simple projects and gradually increase complexity.",
        keywords: ["learn", "ai", "start", "beginner", "how to", "tutorial"]
    },
    {
        question: "What skills are needed for AI?",
        answer: "Essential AI skills include: Programming (Python, R), Mathematics (linear algebra, calculus, probability, statistics), Machine Learning algorithms, Deep Learning frameworks (TensorFlow, PyTorch), Data preprocessing and analysis, Problem-solving abilities, Domain knowledge, and understanding of neural networks. Soft skills like curiosity and continuous learning are also important.",
        keywords: ["skills", "ai", "requirements", "needed", "learn"]
    },
    {
        question: "What is overfitting in machine learning?",
        answer: "Overfitting occurs when a machine learning model learns the training data too well, including its noise and outliers, resulting in poor performance on new, unseen data. The model becomes too complex and fails to generalize. Solutions include cross-validation, regularization, pruning, early stopping, and using more training data.",
        keywords: ["overfitting", "overfit", "generalization", "training", "model"]
    },
    {
        question: "What is the difference between AI and ML?",
        answer: "AI (Artificial Intelligence) is the broader concept of machines being able to carry out tasks in a smart way. ML (Machine Learning) is a subset of AI that focuses on the idea that machines can learn from data. In other words, all machine learning is AI, but not all AI is machine learning. AI includes rule-based systems, while ML specifically involves learning from data.",
        keywords: ["difference", "ai", "ml", "vs", "comparison"]
    },
    {
        question: "What is data preprocessing?",
        answer: "Data Preprocessing is the process of cleaning and transforming raw data into a format suitable for machine learning models. Steps include handling missing values, removing duplicates, normalizing/scaling features, encoding categorical variables, handling outliers, and feature engineering. Quality preprocessing significantly impacts model performance.",
        keywords: ["preprocessing", "data", "cleaning", "preparation", "transformation"]
    }
];

// Elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');
const clearChatBtn = document.getElementById('clear-chat');
const suggestedQuestions = document.querySelectorAll('.suggestion-chip');

// Auto-resize textarea
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Send message on Enter (Shift+Enter for new line)
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Send button click
sendBtn.addEventListener('click', sendMessage);

// Suggestion chips click
suggestedQuestions.forEach(chip => {
    chip.addEventListener('click', function() {
        userInput.value = this.textContent;
        sendMessage();
    });
});

// Clear chat
clearChatBtn.addEventListener('click', function() {
    const messages = chatMessages.querySelectorAll('.message-wrapper, .user-message-wrapper');
    messages.forEach(msg => {
        msg.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => msg.remove(), 300);
    });
});

// Text preprocessing (tokenization and cleaning)
function preprocessText(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 0);
}

// Calculate cosine similarity between two text vectors
function cosineSimilarity(tokens1, tokens2) {
    const set1 = new Set(tokens1);
    const set2 = new Set(tokens2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    
    if (set1.size === 0 || set2.size === 0) return 0;
    
    const similarity = intersection.size / Math.sqrt(set1.size * set2.size);
    return similarity;
}

// Find best matching FAQ
function findBestMatch(userQuestion) {
    const userTokens = preprocessText(userQuestion);
    let bestMatch = null;
    let highestScore = 0;
    
    faqDatabase.forEach(faq => {
        // Check question similarity
        const questionTokens = preprocessText(faq.question);
        const questionScore = cosineSimilarity(userTokens, questionTokens);
        
        // Check keywords similarity
        const keywordScore = cosineSimilarity(userTokens, faq.keywords);
        
        // Combined score (weighted average)
        const combinedScore = (questionScore * 0.6) + (keywordScore * 0.4);
        
        if (combinedScore > highestScore) {
            highestScore = combinedScore;
            bestMatch = faq;
        }
    });
    
    return {
        match: bestMatch,
        confidence: highestScore
    };
}

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Display user message
    displayUserMessage(message);
    
    // Clear input
    userInput.value = '';
    userInput.style.height = 'auto';
    
    // Disable send button and show typing indicator
    sendBtn.disabled = true;
    typingIndicator.classList.add('show');
    
    // Simulate processing delay for better UX
    setTimeout(() => {
        const result = findBestMatch(message);
        
        typingIndicator.classList.remove('show');
        sendBtn.disabled = false;
        
        if (result.confidence > 0.1) {
            displayBotMessage(result.match.answer, result.confidence);
        } else {
            displayBotMessage(
                "I'm sorry, I couldn't find a good match for your question. Could you please rephrase or ask about AI, Machine Learning, Programming, or Web Development?",
                0
            );
        }
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000 + Math.random() * 1000);
}

// Display user message
function displayUserMessage(message) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'user-message-wrapper';
    
    const messageBubble = document.createElement('div');
    messageBubble.className = 'user-message-bubble';
    messageBubble.textContent = message;
    
    messageWrapper.appendChild(messageBubble);
    chatMessages.appendChild(messageWrapper);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Display bot message
function displayBotMessage(message, confidence) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper';
    
    const messageBubble = document.createElement('div');
    messageBubble.className = 'bot-message-bubble';
    
    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < message.length) {
            messageBubble.textContent += message.charAt(index);
            index++;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            clearInterval(typingInterval);
            
            // Add confidence score if match was found
            if (confidence > 0) {
                const confidenceText = document.createElement('div');
                confidenceText.className = 'confidence-score';
                confidenceText.textContent = `Confidence: ${(confidence * 100).toFixed(1)}%`;
                messageBubble.appendChild(confidenceText);
            }
        }
    }, 15);
    
    messageWrapper.appendChild(messageBubble);
    chatMessages.appendChild(messageWrapper);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Focus on input on load
window.addEventListener('load', () => {
    userInput.focus();
});
