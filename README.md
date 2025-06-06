# 名前暗号化アプリ（PWA版）

![ライセンス](https://img.shields.io/badge/license-MIT-blue.svg)
![バージョン](https://img.shields.io/badge/version-1.0.0-green.svg)

名前やテキストを安全に暗号化・復号化できるシンプルなPWA（Progressive Web App）です。プライバシーを重視し、すべての処理はデバイス上で行われます。サーバーとの通信は一切ありません。

## 特徴

- 🔒 **高度な暗号化**: AES-GCM暗号化アルゴリズムとSHA-256によるキー派生
- 🌐 **クロスプラットフォーム**: すべてのモダンブラウザで動作
- 📱 **PWA対応**: ホーム画面に追加可能
- 🔌 **オフライン対応**: インターネット接続なしで動作
- 🔐 **完全なプライバシー**: すべての処理がクライアント側で実行

## デモ

[ライブデモを見る](https://git.exlabo.jp)

## 技術

このアプリは以下の技術を使用しています：

- **HTML5/CSS3/JavaScript**: フロントエンド開発
- **Web Crypto API**: 暗号化と復号化
- **Service Worker API**: オフライン機能
- **Base58エンコーディング**: 暗号文のエンコード

## インストール

### ウェブサイトとして

1. リポジトリをクローン：
   ```bash
   git clone https://github.com/ex-takashima/CryotoNameWeb.git
   ```

2. お好みのウェブサーバーでホスティング（HTTPS必須）：
   - GitHubPages
   - Netlify
   - Vercel
   - Firebase Hosting
   などが利用可能です

### PWAとして

1. ブラウザから[アプリのURL](https://git.exlabo.jp)にアクセス
2. ブラウザの「ホーム画面に追加」または「インストール」オプションを使用
3. これでアプリがデバイスにインストールされます

## 使用方法

### 暗号化

1. 「暗号化する名前」欄に暗号化したいテキストを入力
2. 「暗号化キー」欄に安全なパスワードを入力
3. 「暗号化する」ボタンをクリック
4. 暗号化された文字列が表示されます
5. 「コピーする」ボタンで結果をクリップボードにコピー

### 復号化

1. 「復号する文字列」欄に暗号化された文字列を入力
2. 「復号キー」欄に暗号化時と同じパスワードを入力
3. 「復号する」ボタンをクリック
4. 復号された元のテキストが表示されます

## セキュリティについて

このアプリでは、以下の暗号化技術を使用しています：

- **AES-GCM**: Advanced Encryption Standard with Galois/Counter Mode
- **SHA-256**: セキュアなキー派生用ハッシュ関数
- **Base58**: 暗号文のユーザーフレンドリーなエンコーディング

すべての処理はユーザーのデバイス上のみで行われ、データがサーバーに送信されることはありません。

## ブラウザ互換性

以下のブラウザで動作確認をしています：

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 貢献

プルリクエストは大歓迎です。大きな変更の場合は、まずissueを作成して議論してください。

## 関連プロジェクト

- [名前暗号化アプリ - iOS版](https://github.com/ex-takashima/cryptoname)

## ライセンス

[MIT](LICENSE)

## 開発者

- 高島淳司 - [連絡先](don.exlabo@gmail.com)

## 謝辞

- このプロジェクトは[Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)の恩恵を受けています
