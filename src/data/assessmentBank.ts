import { AssessmentQuestion } from '../types';

export const mockAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'quest-1',
    domain: 'React & TypeScript Architecture',
    question: 'In React 19 server components, what is the primary benefit of using `useActionState` when handling form submissions?',
    codeSnippet: `const [state, formAction, isPending] = useActionState(updateProfile, initialState);`,
    options: [
      'It automatically memoizes all child props using React Compiler.',
      'It manages pending state, optimistic updates, and response payloads directly without manual useEffect handlers.',
      'It converts client side state into server side WebSockets.',
      'It prevents form default submission without requiring e.preventDefault().'
    ],
    correctOptionIndex: 1,
    explanation: 'React 19`s useActionState hook manages the form action state, pending status, and returned state in a single unified primitive.'
  },
  {
    id: 'quest-2',
    domain: 'System Architecture & Vector Search',
    question: 'Which index structure provides optimal sub-linear search latency for High-Dimensional Retrieval-Augmented Generation (RAG) vector embeddings?',
    options: [
      'B-Tree Index with Binary Search',
      'HNSW (Hierarchical Navigable Small World) Graph Index',
      'LSM Tree (Log-Structured Merge)',
      'Inverted Full-Text Index'
    ],
    correctOptionIndex: 1,
    explanation: 'HNSW is the industry standard graph index for fast approximate nearest neighbor (ANN) vector searches.'
  },
  {
    id: 'quest-3',
    domain: 'Kubernetes & Cloud DevOps',
    question: 'What is the purpose of Kubernetes Horizontal Pod Autoscaler (HPA) when configured with Prometheus custom metrics?',
    options: [
      'To resize node disk volumes dynamically during high I/O.',
      'To scale container pod replicas automatically based on real-time metrics such as queue depth or HTTP latency.',
      'To perform blue-green ingress DNS routing.',
      'To restart deadlocked database containers.'
    ],
    correctOptionIndex: 1,
    explanation: 'HPA scales pod replicas dynamically using custom metrics scraped by Prometheus.'
  }
];
