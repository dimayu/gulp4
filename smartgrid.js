let smartgrid = require('smart-grid');

let settings = {
   outputStyle: 'scss',
   columns: 12,
   offset: '16px',
   mobileFirst: false,
   container: {
      maxWidth: '1390px',
      fields: '0px'
   },
   breakPoints: {
      lmd: {
         width: '1480px',
         fields: '40px'
      },
      md: {
         width: '940px',
         fields: '15px'
      },
      sm: {
         width: '780px',
         fields: '10px'
      },
      xxs: {
         width: '440px',
         fields: '10px'
      }
   }
};

smartgrid('./src/scss', settings);



/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
