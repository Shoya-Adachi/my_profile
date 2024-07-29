# ベースイメージとして Node.js を使用
FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ホットリロードを有効にするために開発モードで起動
CMD ["npm", "run", "dev"]

# コンテナのポートを公開
EXPOSE 3000
