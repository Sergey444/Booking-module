const path = require(`path`);
// const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
    mode: `development`, // Режим сборки
    entry: `./src/main.js`, // Точка входа приложения
    output: { // Настройка выходного файла
        filename: `main.js`,
        path: path.join(__dirname, `dist`)
    },
    module: { // Расширяем функциональность лоадерами
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader'
                }]
            }, {
            test: /\.js$/, // Проверка типов файлов, над которыми будет работать лоадерами
            use: [
                { 
                    loader:  `babel-loader`, 
                    options: { babelrc: true }
                }
            ] // Лоадер который будет применён
        }]
    },
    // plugins: [ // Расширяем функциональность плагинами
    //     new HtmlWebpackPlugin({ // Создаём инстанс плагина
    //         template: `./src/index.html` // ...передав в него необходимые ему параметры
    //     })
    // ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: `source-map`, // Подключаем sourcemaps
    devServer: {
        contentBase: path.join(__dirname, `dist`), // Где искать сборку
        publicPath: `http://localhost:8080/`, // Веб адрес сборки
        hot: true, // Автоматическая перезагрузка страницы
        compress: true // Сжатие
    }
};