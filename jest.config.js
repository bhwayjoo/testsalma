module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transformer les fichiers JSX et JS avec babel-jest
  },
  testEnvironment: 'jsdom', // Si vous exécutez des tests de serveur Node
};
