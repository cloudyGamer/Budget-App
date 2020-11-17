const path = require('path');
console.log(path.join(__dirname,'public'));
console.log(__dirname);
module.exports = (env) => {
     const ExtractTextPlugin = require('extract-text-webpack-plugin');
     const webpack = require('webpack');
     
     process.env.NODE_ENV = process.env.NODE_ENV || 'development';
      if (process.env.NODE_ENV==='test') {
          require('dotenv').config({path:'.env.test'});
      } else if(process.env.NODE_ENV==='development'){
          require('dotenv').config({path:'.env.development'});
      }
      
     const CSSExtract = new ExtractTextPlugin('styles.css');
     const isProduction = env === 'production';
     console.log('env',env);
     return {
               entry : ['regenerator-runtime/runtime','core-js','./src/app.js'],
              output : {
                  path: path.join(__dirname,'public','dist'),
                  filename: 'bundle.js'
              },

               module: {
                  rules: [{
                          loader: 'babel-loader',
                          test: /\.js$/,  
                          exclude: /node_modules/
               },{
                   test:/\.s?css$/,
                   use: CSSExtract.extract({
                        use: [
                             {
                                  'loader':'css-loader',
                                  options: {
                                       sourceMap: true
                                  }
                             },
                             {
                                  'loader':'sass-loader',
                                  options: {
                                       sourceMap: true
                                  }
                             }
                        ]
                   })
                   }]
               },
               plugins: [
                    CSSExtract,
                    new webpack.DefinePlugin({
                         'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                         'process.env.FIREBASE_APIKEY        ': JSON.stringify(process.env.FIREBASE_APIKEY       ),
                         'process.env.FIREBASE_AUTHDOMAIN    ': JSON.stringify(process.env.FIREBASE_AUTHDOMAIN   ),
                         'process.env.FIREBASE_DATABASEURL   ': JSON.stringify(process.env.FIREBASE_DATABASEURL  ),
                         'process.env.FIREBASE_PROJECTID     ': JSON.stringify(process.env.FIREBASE_PROJECTID    ),
                         'process.env.FIREBASE_STORAGEBUCKET ': JSON.stringify(process.env.FIREBASE_STORAGEBUCKET       ),
                         'process.env.FIREBASE_MESSAGINGSENDERID ': JSON.stringify(process.env.FIREBASE_MESSAGINGSENDERID    )
                         
                    })
               ],
               devtool: isProduction ?'source-map' : 'inline-source-map',
               devServer: {contentBase: path.join(__dirname,'public'),
                           historyApiFallback: true,
                           publicPath: '/dist/'
                           }
                    };
};


//Users/pol/Documents/react-course-projects/Indecision-app