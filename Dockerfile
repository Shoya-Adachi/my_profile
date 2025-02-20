# ベースイメージとして Node.js を使用
FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ホットリロードを有効にするために開発モードで起動
# CMD ["npm", "run", "dev"]

# 依存関係をインストールするスクリプトを作成
RUN echo '#!/bin/sh\nnpm install\nnpm run dev' > /start.sh && chmod +x /start.sh

# スクリプトを実行する
CMD ["/start.sh"]

# コンテナのポートを公開
EXPOSE 3000
