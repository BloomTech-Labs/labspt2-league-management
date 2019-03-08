const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'cgallone0',
          password: bcrypt.hashSync('rpXPv6MLe6', 10),
          email: 'cgallone0@soundcloud.com',
          first_name: 'Ceciley',
          last_name: 'Gallone',
          phone: '3777432587'
        },
        {
          username: 'afarrear1',
          password: bcrypt.hashSync('GDXoRdIwq5sm', 10),
          email: 'afarrear1@usa.gov',
          first_name: 'Athene',
          last_name: 'Farrear',
          phone: '4951690943'
        },
        {
          username: 'pbahl2',
          password: bcrypt.hashSync('5pO5emZSMx', 10),
          email: 'pbahl2@bizjournals.com',
          first_name: 'Pamella',
          last_name: 'Bahl',
          phone: '2075041820'
        },
        {
          username: 'crochford3',
          password: bcrypt.hashSync('XpJILoM', 10),
          email: 'crochford3@army.mil',
          first_name: 'Cullan',
          last_name: 'Rochford',
          phone: '3281152036'
        },
        {
          username: 'olabro4',
          password: bcrypt.hashSync('UH0mz3Wj', 10),
          email: 'olabro4@dion.ne.jp',
          first_name: 'Osbourn',
          last_name: 'Labro',
          phone: '5882607060'
        },
        {
          username: 'cotham5',
          password: bcrypt.hashSync('ZRl4zoMuLTn2', 10),
          email: 'cotham5@creativecommons.org',
          first_name: 'Cassaundra',
          last_name: 'Otham',
          phone: '5634781997'
        },
        {
          username: 'opaternoster6',
          password: bcrypt.hashSync('jM84dXMxXLH', 10),
          email: 'opaternoster6@answers.com',
          first_name: 'Orelia',
          last_name: 'Paternoster',
          phone: '3441549187'
        },
        {
          username: 'teltune7',
          password: bcrypt.hashSync('utYiidDCKw', 10),
          email: 'teltune7@linkedin.com',
          first_name: 'Torrey',
          last_name: 'Eltune',
          phone: '5443643118'
        },
        {
          username: 'gsigars8',
          password: bcrypt.hashSync('OssyvjbtAS', 10),
          email: 'gsigars8@aol.com',
          first_name: 'Giraldo',
          last_name: 'Sigars',
          phone: '4375619130'
        },
        {
          username: 'srudolf9',
          password: bcrypt.hashSync('PaxHvitkLlL', 10),
          email: 'srudolf9@goo.ne.jp',
          first_name: 'Stevie',
          last_name: 'Rudolf',
          phone: '8719661870'
        },
        {
          username: 'lcherrymana',
          password: bcrypt.hashSync('EdnLpY7kif', 10),
          email: 'lcherrymana@epa.gov',
          first_name: 'Liv',
          last_name: 'Cherryman',
          phone: '6153610854'
        },
        {
          username: 'tmistryb',
          password: bcrypt.hashSync('ExXR9VzdWj', 10),
          email: 'tmistryb@foxnews.com',
          first_name: 'Teri',
          last_name: 'Mistry',
          phone: '7381186694'
        },
        {
          username: 'riddensc',
          password: bcrypt.hashSync('mbp2r30e', 10),
          email: 'riddensc@narod.ru',
          first_name: 'Reinwald',
          last_name: 'Iddens',
          phone: '2637544013'
        },
        {
          username: 'mbolensd',
          password: bcrypt.hashSync('EiWVh9w3B', 10),
          email: 'mbolensd@symantec.com',
          first_name: 'Marina',
          last_name: 'Bolens',
          phone: '1162675076'
        },
        {
          username: 'cchazerande',
          password: bcrypt.hashSync('HTXS4Utr', 10),
          email: 'cchazerande@cyberchimps.com',
          first_name: 'Chane',
          last_name: 'Chazerand',
          phone: '6344408544'
        },
        {
          username: 'soelsf',
          password: bcrypt.hashSync('QwJYdATKUV', 10),
          email: 'soelsf@apple.com',
          first_name: 'Stephie',
          last_name: 'Oels',
          phone: '5374695162'
        },
        {
          username: 'gjefferdg',
          password: bcrypt.hashSync('C7QQZJ', 10),
          email: 'gjefferdg@timesonline.co.uk',
          first_name: 'Gram',
          last_name: 'Jefferd',
          phone: '6431595452'
        },
        {
          username: 'rsooperh',
          password: bcrypt.hashSync('JknUzMs3cm', 10),
          email: 'rsooperh@sakura.ne.jp',
          first_name: 'Randal',
          last_name: 'Sooper',
          phone: '5831842254'
        },
        {
          username: 'pwhittingtoni',
          password: bcrypt.hashSync('YE9GtUFYtgn', 10),
          email: 'pwhittingtoni@ow.ly',
          first_name: 'Port',
          last_name: 'Whittington',
          phone: '6068769184'
        },
        {
          username: 'jsimmonettj',
          password: bcrypt.hashSync('Y5Tn26K', 10),
          email: 'jsimmonettj@cbslocal.com',
          first_name: 'Johnna',
          last_name: 'Simmonett',
          phone: '2702807287'
        },
        {
          username: 'blearoidk',
          password: bcrypt.hashSync('TRSY1p8egjj', 10),
          email: 'blearoidk@1688.com',
          first_name: 'Basil',
          last_name: 'Learoid',
          phone: '1355155179'
        },
        {
          username: 'svarfalameevl',
          password: bcrypt.hashSync('rXFAxF', 10),
          email: 'svarfalameevl@mashable.com',
          first_name: 'Sheelagh',
          last_name: 'Varfalameev',
          phone: '3197701348'
        },
        {
          username: 'kelandm',
          password: bcrypt.hashSync('TI8VxP', 10),
          email: 'kelandm@va.gov',
          first_name: 'Kendell',
          last_name: 'Eland',
          phone: '5767959124'
        },
        {
          username: 'rabbisonn',
          password: bcrypt.hashSync('MealoBBoY3Bt', 10),
          email: 'rabbisonn@a8.net',
          first_name: 'Ranna',
          last_name: 'Abbison',
          phone: '4818500607'
        },
        {
          username: 'bolenechano',
          password: bcrypt.hashSync('IBcAydZ0s', 10),
          email: 'bolenechano@pagesperso-orange.fr',
          first_name: 'Briny',
          last_name: "O'Lenechan",
          phone: '8699219311'
        },
        {
          username: 'hbrounep',
          password: bcrypt.hashSync('rcaKIeY2t', 10),
          email: 'hbrounep@geocities.jp',
          first_name: 'Heinrik',
          last_name: 'Broune',
          phone: '5571172503'
        },
        {
          username: 'taizikovitchq',
          password: bcrypt.hashSync('wUDX9xvSrphg', 10),
          email: 'taizikovitchq@npr.org',
          first_name: 'Tricia',
          last_name: 'Aizikovitch',
          phone: '3414717467'
        },
        {
          username: 'gleetr',
          password: bcrypt.hashSync('cVmfrAef60Ex', 10),
          email: 'gleetr@patch.com',
          first_name: 'Geri',
          last_name: 'Leet',
          phone: '5137641794'
        },
        {
          username: 'rwhitmans',
          password: bcrypt.hashSync('QXkr6I7', 10),
          email: 'rwhitmans@vinaora.com',
          first_name: 'Rowland',
          last_name: 'Whitman',
          phone: '2651122176'
        },
        {
          username: 'vtaffiet',
          password: bcrypt.hashSync('1hP96jLjwVQg', 10),
          email: 'vtaffiet@clickbank.net',
          first_name: 'Vin',
          last_name: 'Taffie',
          phone: '2653022617'
        },
        {
          username: 'hfreckeltonu',
          password: bcrypt.hashSync('bOmsoz5X', 10),
          email: 'hfreckeltonu@trellian.com',
          first_name: 'Hayes',
          last_name: 'Freckelton',
          phone: '5158058730'
        },
        {
          username: 'jshireffv',
          password: bcrypt.hashSync('xiVdTyHrWYSq', 10),
          email: 'jshireffv@amazon.com',
          first_name: 'Joshuah',
          last_name: 'Shireff',
          phone: '8944801999'
        },
        {
          username: 'ysounessw',
          password: bcrypt.hashSync('MSbxj9ZqQ', 10),
          email: 'ysounessw@t.co',
          first_name: 'Yuri',
          last_name: 'Souness',
          phone: '2212370568'
        },
        {
          username: 'npancastx',
          password: bcrypt.hashSync('Vwcnrz3UNKKp', 10),
          email: 'npancastx@ezinearticles.com',
          first_name: 'Nettle',
          last_name: 'Pancast',
          phone: '1157271468'
        },
        {
          username: 'cjuleffy',
          password: bcrypt.hashSync('zf3SNTN5qeU', 10),
          email: 'cjuleffy@wix.com',
          first_name: 'Conway',
          last_name: 'Juleff',
          phone: '9223413425'
        },
        {
          username: 'cbriscoz',
          password: bcrypt.hashSync('yaoayAw', 10),
          email: 'cbriscoz@columbia.edu',
          first_name: 'Constantia',
          last_name: 'Brisco',
          phone: '9478999551'
        },
        {
          username: 'gcaton10',
          password: bcrypt.hashSync('bIx7SoAYS', 10),
          email: 'gcaton10@bing.com',
          first_name: 'Ginnie',
          last_name: 'Caton',
          phone: '4547315142'
        },
        {
          username: 'hjenton11',
          password: bcrypt.hashSync('TAVLXrsbG', 10),
          email: 'hjenton11@berkeley.edu',
          first_name: 'Horatia',
          last_name: 'Jenton',
          phone: '9868776842'
        },
        {
          username: 'proote12',
          password: bcrypt.hashSync('txKkqxMb7', 10),
          email: 'proote12@berkeley.edu',
          first_name: 'Paule',
          last_name: 'Roote',
          phone: '7097532435'
        },
        {
          username: 'dcanti13',
          password: bcrypt.hashSync('HcrkB6', 10),
          email: 'dcanti13@nsw.gov.au',
          first_name: 'Desiri',
          last_name: 'Canti',
          phone: '4527528036'
        },
        {
          username: 'cgrisenthwaite14',
          password: bcrypt.hashSync('CZacXVJ', 10),
          email: 'cgrisenthwaite14@bloglines.com',
          first_name: 'Cosme',
          last_name: 'Grisenthwaite',
          phone: '5883815420'
        },
        {
          username: 'abauchop15',
          password: bcrypt.hashSync('mtBE5eat', 10),
          email: 'abauchop15@globo.com',
          first_name: 'Almeda',
          last_name: 'Bauchop',
          phone: '7061627061'
        },
        {
          username: 'danten16',
          password: bcrypt.hashSync('H0aOgXjk', 10),
          email: 'danten16@photobucket.com',
          first_name: 'Darb',
          last_name: 'Anten',
          phone: '4533029845'
        },
        {
          username: 'mludee17',
          password: bcrypt.hashSync('zBwNVjtxyl', 10),
          email: 'mludee17@bandcamp.com',
          first_name: 'Mommy',
          last_name: 'Ludee',
          phone: '5535685208'
        },
        {
          username: 'ghalston18',
          password: bcrypt.hashSync('69kfjw', 10),
          email: 'ghalston18@shinystat.com',
          first_name: 'Genevra',
          last_name: 'Halston',
          phone: '7432193081'
        },
        {
          username: 'dtolliday19',
          password: bcrypt.hashSync('UIo05i90', 10),
          email: 'dtolliday19@mapy.cz',
          first_name: 'Dev',
          last_name: 'Tolliday',
          phone: '8211262876'
        },
        {
          username: 'bocannan1a',
          password: bcrypt.hashSync('4pu0miKs0B', 10),
          email: 'bocannan1a@pinterest.com',
          first_name: 'Beth',
          last_name: "O'Cannan",
          phone: '4576896672'
        },
        {
          username: 'ahaversum1b',
          password: bcrypt.hashSync('Vsx41gUU', 10),
          email: 'ahaversum1b@google.cn',
          first_name: 'Amabelle',
          last_name: 'Haversum',
          phone: '7917436011'
        },
        {
          username: 'vfranceschino1c',
          password: bcrypt.hashSync('bEj5TFcQ', 10),
          email: 'vfranceschino1c@hibu.com',
          first_name: 'Virge',
          last_name: 'Franceschino',
          phone: '9629823745'
        },
        {
          username: 'bknights1d',
          password: bcrypt.hashSync('iXMnWKG', 10),
          email: 'bknights1d@blog.com',
          first_name: 'Bunny',
          last_name: 'Knights',
          phone: '7692254934'
        },
        {
          username: 'wcockaday1e',
          password: bcrypt.hashSync('l2F4HFNf', 10),
          email: 'wcockaday1e@mozilla.com',
          first_name: 'Wylma',
          last_name: 'Cockaday',
          phone: '3361403131'
        },
        {
          username: 'afernley1f',
          password: bcrypt.hashSync('sDR42bYil', 10),
          email: 'afernley1f@biglobe.ne.jp',
          first_name: 'Annie',
          last_name: 'Fernley',
          phone: '7767914407'
        },
        {
          username: 'cbyrd1g',
          password: bcrypt.hashSync('PZKKcEluyD0', 10),
          email: 'cbyrd1g@sohu.com',
          first_name: 'Carmita',
          last_name: 'Byrd',
          phone: '6212847006'
        },
        {
          username: 'iferneyhough1h',
          password: bcrypt.hashSync('jZrq8It', 10),
          email: 'iferneyhough1h@google.de',
          first_name: 'Isacco',
          last_name: 'Ferneyhough',
          phone: '3522293780'
        },
        {
          username: 'tviggars1i',
          password: bcrypt.hashSync('Z8jZSOa', 10),
          email: 'tviggars1i@mail.ru',
          first_name: 'Tanya',
          last_name: 'Viggars',
          phone: '7048785915'
        },
        {
          username: 'alarrosa1j',
          password: bcrypt.hashSync('uecKsD4kZFb', 10),
          email: 'alarrosa1j@alibaba.com',
          first_name: 'Adrianna',
          last_name: 'Larrosa',
          phone: '6334989283'
        },
        {
          username: 'mzapatero1k',
          password: bcrypt.hashSync('61sJFU', 10),
          email: 'mzapatero1k@nyu.edu',
          first_name: 'Mark',
          last_name: 'Zapatero',
          phone: '8272549355'
        },
        {
          username: 'dthomlinson1l',
          password: bcrypt.hashSync('KtEPweAdG', 10),
          email: 'dthomlinson1l@github.io',
          first_name: 'Debor',
          last_name: 'Thomlinson',
          phone: '6712135586'
        },
        {
          username: 'gpappin1m',
          password: bcrypt.hashSync('wFrgIDx', 10),
          email: 'gpappin1m@about.me',
          first_name: 'Gianni',
          last_name: 'Pappin',
          phone: '9307922548'
        },
        {
          username: 'amelia1n',
          password: bcrypt.hashSync('JTnUZXr86g', 10),
          email: 'amelia1n@java.com',
          first_name: 'Armand',
          last_name: 'Melia',
          phone: '3821553252'
        },
        {
          username: 'sbeacham1o',
          password: bcrypt.hashSync('KQv908qH2A7h', 10),
          email: 'sbeacham1o@netscape.com',
          first_name: 'Skelly',
          last_name: 'Beacham',
          phone: '2353115506'
        },
        {
          username: 'rdanilovitch1p',
          password: bcrypt.hashSync('qQi8PEoeKN', 10),
          email: 'rdanilovitch1p@skype.com',
          first_name: 'Reginald',
          last_name: 'Danilovitch',
          phone: '1755991422'
        },
        {
          username: 'ysuatt1q',
          password: bcrypt.hashSync('Q5h4hHLh2dq', 10),
          email: 'ysuatt1q@tuttocitta.it',
          first_name: 'Ynes',
          last_name: 'Suatt',
          phone: '5234564640'
        },
        {
          username: 'mmacgiollapheadair1r',
          password: bcrypt.hashSync('EmMdol74nO', 10),
          email: 'mmacgiollapheadair1r@sciencedaily.com',
          first_name: 'Maribeth',
          last_name: 'Mac Giolla Pheadair',
          phone: '6457978874'
        },
        {
          username: 'bherculson1s',
          password: bcrypt.hashSync('6vXTIc1Qk78', 10),
          email: 'bherculson1s@virginia.edu',
          first_name: 'Bram',
          last_name: 'Herculson',
          phone: '2349059218'
        },
        {
          username: 'jswinnard1t',
          password: bcrypt.hashSync('s77kjhvC', 10),
          email: 'jswinnard1t@twitter.com',
          first_name: 'Jimmy',
          last_name: 'Swinnard',
          phone: '9855810694'
        },
        {
          username: 'jbawdon1u',
          password: bcrypt.hashSync('bIML2l', 10),
          email: 'jbawdon1u@who.int',
          first_name: 'Jarrett',
          last_name: 'Bawdon',
          phone: '1931991771'
        },
        {
          username: 'rliebmann1v',
          password: bcrypt.hashSync('9XzzjJMO7w', 10),
          email: 'rliebmann1v@wisc.edu',
          first_name: 'Russell',
          last_name: 'Liebmann',
          phone: '1018092263'
        },
        {
          username: 'lgoodsall1w',
          password: bcrypt.hashSync('j9R8eT', 10),
          email: 'lgoodsall1w@cbslocal.com',
          first_name: 'Loren',
          last_name: 'Goodsall',
          phone: '4304709716'
        },
        {
          username: 'sfranke1x',
          password: bcrypt.hashSync('y1ydAT', 10),
          email: 'sfranke1x@aol.com',
          first_name: 'Somerset',
          last_name: 'Franke',
          phone: '2674134959'
        },
        {
          username: 'lbunt1y',
          password: bcrypt.hashSync('6xmgbsz', 10),
          email: 'lbunt1y@cornell.edu',
          first_name: 'Louisette',
          last_name: 'Bunt',
          phone: '8403933666'
        },
        {
          username: 'ccarnock1z',
          password: bcrypt.hashSync('e5F35j9UqZp', 10),
          email: 'ccarnock1z@upenn.edu',
          first_name: 'Ciel',
          last_name: 'Carnock',
          phone: '1916424469'
        },
        {
          username: 'hkemmish20',
          password: bcrypt.hashSync('M9ZFyr', 10),
          email: 'hkemmish20@last.fm',
          first_name: 'Horacio',
          last_name: 'Kemmish',
          phone: '8534211878'
        },
        {
          username: 'igoss21',
          password: bcrypt.hashSync('hig3RERGEv', 10),
          email: 'igoss21@smugmug.com',
          first_name: 'Iseabal',
          last_name: 'Goss',
          phone: '6465806575'
        },
        {
          username: 'shein22',
          password: bcrypt.hashSync('x1r0UzVJEQQ', 10),
          email: 'shein22@thetimes.co.uk',
          first_name: 'Shawnee',
          last_name: 'Hein',
          phone: '7513435572'
        },
        {
          username: 'nkalaher23',
          password: bcrypt.hashSync('O8gsNQqUhd', 10),
          email: 'nkalaher23@wordpress.org',
          first_name: 'Natty',
          last_name: 'Kalaher',
          phone: '7438804124'
        },
        {
          username: 'clowings24',
          password: bcrypt.hashSync('Fbd5WyJQ6nF', 10),
          email: 'clowings24@sourceforge.net',
          first_name: 'Carolan',
          last_name: 'Lowings',
          phone: '6887276194'
        },
        {
          username: 'eheadan25',
          password: bcrypt.hashSync('RdNhbALTV97a', 10),
          email: 'eheadan25@cyberchimps.com',
          first_name: 'Eleonore',
          last_name: 'Headan',
          phone: '5179889630'
        },
        {
          username: 'maberkirder26',
          password: bcrypt.hashSync('LaHzl7geyuU', 10),
          email: 'maberkirder26@cnbc.com',
          first_name: 'Manda',
          last_name: 'Aberkirder',
          phone: '8693345090'
        },
        {
          username: 'abrickstock27',
          password: bcrypt.hashSync('Ik4MOjPon', 10),
          email: 'abrickstock27@sogou.com',
          first_name: 'Anderson',
          last_name: 'Brickstock',
          phone: '4994680003'
        },
        {
          username: 'tmercey28',
          password: bcrypt.hashSync('9uzbCAEQgKm', 10),
          email: 'tmercey28@prweb.com',
          first_name: 'Tanner',
          last_name: 'Mercey',
          phone: '5803701624'
        },
        {
          username: 'pspier29',
          password: bcrypt.hashSync('5OYZ2EpCL0nn', 10),
          email: 'pspier29@berkeley.edu',
          first_name: 'Perren',
          last_name: 'Spier',
          phone: '6321848704'
        },
        {
          username: 'wlinskill2a',
          password: bcrypt.hashSync('XmzdlbEvr', 10),
          email: 'wlinskill2a@dedecms.com',
          first_name: 'Wilburt',
          last_name: 'Linskill',
          phone: '8695396555'
        },
        {
          username: 'gstendall2b',
          password: bcrypt.hashSync('QEWSKnW', 10),
          email: 'gstendall2b@tuttocitta.it',
          first_name: 'Grover',
          last_name: 'Stendall',
          phone: '3754554508'
        },
        {
          username: 'mholmes2c',
          password: bcrypt.hashSync('SUUG0kCz93', 10),
          email: 'mholmes2c@nature.com',
          first_name: 'Marice',
          last_name: 'holmes',
          phone: '3764023405'
        },
        {
          username: 'rpixton2d',
          password: bcrypt.hashSync('3hxJ9nl8', 10),
          email: 'rpixton2d@skype.com',
          first_name: 'Rickie',
          last_name: 'Pixton',
          phone: '5442951051'
        },
        {
          username: 'mroddick2e',
          password: bcrypt.hashSync('ZmF9Yw46XU', 10),
          email: 'mroddick2e@odnoklassniki.ru',
          first_name: 'Mead',
          last_name: 'Roddick',
          phone: '2014707053'
        },
        {
          username: 'ssearsby2f',
          password: bcrypt.hashSync('9vSQmF', 10),
          email: 'ssearsby2f@state.gov',
          first_name: 'Skylar',
          last_name: 'Searsby',
          phone: '3531183144'
        },
        {
          username: 'rrebbeck2g',
          password: bcrypt.hashSync('QWlmUwO', 10),
          email: 'rrebbeck2g@rediff.com',
          first_name: 'Ramsey',
          last_name: 'Rebbeck',
          phone: '6121466331'
        },
        {
          username: 'bwoolford2h',
          password: bcrypt.hashSync('zy1OWF3U', 10),
          email: 'bwoolford2h@about.me',
          first_name: 'Bradly',
          last_name: 'Woolford',
          phone: '4249938319'
        },
        {
          username: 'jlenoury2i',
          password: bcrypt.hashSync('YPX43Jdyli0', 10),
          email: 'jlenoury2i@ehow.com',
          first_name: 'Julio',
          last_name: 'Le Noury',
          phone: '7603729983'
        },
        {
          username: 'cheintzsch2j',
          password: bcrypt.hashSync('SIuw4FIXVLZP', 10),
          email: 'cheintzsch2j@hc360.com',
          first_name: 'Charlean',
          last_name: 'Heintzsch',
          phone: '6998967580'
        },
        {
          username: 'ederoeck2k',
          password: bcrypt.hashSync('amgsaI', 10),
          email: 'ederoeck2k@mozilla.com',
          first_name: 'Ezra',
          last_name: 'De Roeck',
          phone: '3664983828'
        },
        {
          username: 'bdoumenc2l',
          password: bcrypt.hashSync('UxJ2xn1ten7', 10),
          email: 'bdoumenc2l@networksolutions.com',
          first_name: 'Benji',
          last_name: 'Doumenc',
          phone: '6951257057'
        },
        {
          username: 'lsuttling2m',
          password: bcrypt.hashSync('4OskiLIDzZTs', 10),
          email: 'lsuttling2m@indiegogo.com',
          first_name: 'Letizia',
          last_name: 'Suttling',
          phone: '4986950095'
        },
        {
          username: 'gwarmisham2n',
          password: bcrypt.hashSync('kBabRT139J', 10),
          email: 'gwarmisham2n@ca.gov',
          first_name: 'Garrott',
          last_name: 'Warmisham',
          phone: '1912509983'
        },
        {
          username: 'gakister2o',
          password: bcrypt.hashSync('jSjsf8zV9y7J', 10),
          email: 'gakister2o@ameblo.jp',
          first_name: 'Gabrila',
          last_name: 'Akister',
          phone: '5408839989'
        },
        {
          username: 'rpapachristophorou2p',
          password: bcrypt.hashSync('amCPdndpbNJ', 10),
          email: 'rpapachristophorou2p@wix.com',
          first_name: 'Rosina',
          last_name: 'Papachristophorou',
          phone: '9151434850'
        },
        {
          username: 'gdacosta2q',
          password: bcrypt.hashSync('zVgdigbt0Wj', 10),
          email: 'gdacosta2q@liveinternet.ru',
          first_name: 'Gwenora',
          last_name: 'Da Costa',
          phone: '7792894919'
        },
        {
          username: 'ggoddertsf2r',
          password: bcrypt.hashSync('rwjQkTJ9tuL', 10),
          email: 'ggoddertsf2r@sakura.ne.jp',
          first_name: 'Gary',
          last_name: 'Goddert.sf',
          phone: '6284188976'
        },
        {
          username: 'mfeasby2s',
          password: bcrypt.hashSync('cU2wgJlPMkR', 10),
          email: 'mfeasby2s@hostgator.com',
          first_name: 'Morley',
          last_name: 'Feasby',
          phone: '3245917563'
        },
        {
          username: 'sshrieve2t',
          password: bcrypt.hashSync('ffLsKnEEsNi', 10),
          email: 'sshrieve2t@squarespace.com',
          first_name: 'Sophia',
          last_name: 'Shrieve',
          phone: '4863762882'
        },
        {
          username: 'gmossom2u',
          password: bcrypt.hashSync('M2bFO8CH8Y0', 10),
          email: 'gmossom2u@wsj.com',
          first_name: 'Gordon',
          last_name: 'Mossom',
          phone: '4367644052'
        },
        {
          username: 'arief2v',
          password: bcrypt.hashSync('De58or', 10),
          email: 'arief2v@cbslocal.com',
          first_name: 'Alyssa',
          last_name: 'Rief',
          phone: '1477525563'
        },
        {
          username: 'jodooley2w',
          password: bcrypt.hashSync('F0KZsrPK2rJx', 10),
          email: 'jodooley2w@blinklist.com',
          first_name: 'Jilli',
          last_name: "O' Dooley",
          phone: '8022206737'
        },
        {
          username: 'pdunniom2x',
          password: bcrypt.hashSync('eJ7nqUBLELp3', 10),
          email: 'pdunniom2x@studiopress.com',
          first_name: 'Pierre',
          last_name: 'Dunniom',
          phone: '3682637867'
        },
        {
          username: 'lbrugmann2y',
          password: bcrypt.hashSync('j9jeyC3ci', 10),
          email: 'lbrugmann2y@mlb.com',
          first_name: 'Lettie',
          last_name: 'Brugmann',
          phone: '3342678212'
        },
        {
          username: 'dclee2z',
          password: bcrypt.hashSync('YWQf4u1', 10),
          email: 'dclee2z@people.com.cn',
          first_name: 'Desmond',
          last_name: 'Clee',
          phone: '1957170395'
        },
        {
          username: 'cofogarty30',
          password: bcrypt.hashSync('GZ2jmyT', 10),
          email: 'cofogarty30@ning.com',
          first_name: 'Cody',
          last_name: "O'Fogarty",
          phone: '2513904759'
        },
        {
          username: 'yhylands31',
          password: bcrypt.hashSync('a0ukud2B', 10),
          email: 'yhylands31@furl.net',
          first_name: 'Yule',
          last_name: 'Hylands',
          phone: '3799759437'
        },
        {
          username: 'snewey32',
          password: bcrypt.hashSync('g702agJb1qE', 10),
          email: 'snewey32@creativecommons.org',
          first_name: 'Sandie',
          last_name: 'Newey',
          phone: '8742026522'
        },
        {
          username: 'mchurching33',
          password: bcrypt.hashSync('0M7xhHZgn', 10),
          email: 'mchurching33@auda.org.au',
          first_name: 'Melania',
          last_name: 'Churching',
          phone: '3759753023'
        },
        {
          username: 'pkoppelmann34',
          password: bcrypt.hashSync('SqraP6Oe7', 10),
          email: 'pkoppelmann34@oaic.gov.au',
          first_name: 'Prent',
          last_name: 'Koppelmann',
          phone: '1223987347'
        },
        {
          username: 'kklulik35',
          password: bcrypt.hashSync('qqlsi8EUuDd', 10),
          email: 'kklulik35@ezinearticles.com',
          first_name: 'Krystle',
          last_name: 'Klulik',
          phone: '5071567861'
        },
        {
          username: 'dmarham36',
          password: bcrypt.hashSync('ppE4jJAdlXP5', 10),
          email: 'dmarham36@cyberchimps.com',
          first_name: 'Donalt',
          last_name: 'Marham',
          phone: '5792164697'
        },
        {
          username: 'cgodrich37',
          password: bcrypt.hashSync('xjHpOsa', 10),
          email: 'cgodrich37@bluehost.com',
          first_name: 'Cooper',
          last_name: 'Godrich',
          phone: '6104318607'
        },
        {
          username: 'kokennavain38',
          password: bcrypt.hashSync('KIBUvjGuvg', 10),
          email: 'kokennavain38@skyrock.com',
          first_name: 'Kermit',
          last_name: "O'Kennavain",
          phone: '2098066580'
        },
        {
          username: 'lmaccolm39',
          password: bcrypt.hashSync('KqzNhFgy34', 10),
          email: 'lmaccolm39@facebook.com',
          first_name: 'Lane',
          last_name: 'MacColm',
          phone: '7301270126'
        },
        {
          username: 'jsigge3a',
          password: bcrypt.hashSync('z91QGlprlpK', 10),
          email: 'jsigge3a@bizjournals.com',
          first_name: 'Juana',
          last_name: 'Sigge',
          phone: '1885752711'
        },
        {
          username: 'olepiscopio3b',
          password: bcrypt.hashSync('QNybXig06js1', 10),
          email: 'olepiscopio3b@mozilla.org',
          first_name: 'Othilia',
          last_name: "L'Episcopio",
          phone: '9979364118'
        },
        {
          username: 'bmaclise3c',
          password: bcrypt.hashSync('IBl18Lc', 10),
          email: 'bmaclise3c@godaddy.com',
          first_name: 'Brandtr',
          last_name: 'MacLise',
          phone: '7159329952'
        },
        {
          username: 'cdavydkov3d',
          password: bcrypt.hashSync('ZCXmvIDK', 10),
          email: 'cdavydkov3d@is.gd',
          first_name: 'Collette',
          last_name: 'Davydkov',
          phone: '4955888623'
        },
        {
          username: 'atolcharde3e',
          password: bcrypt.hashSync('TMXFFTI', 10),
          email: 'atolcharde3e@ning.com',
          first_name: 'Aubrey',
          last_name: 'Tolcharde',
          phone: '7257724564'
        },
        {
          username: 'mdunkerly3f',
          password: bcrypt.hashSync('U0ivqc', 10),
          email: 'mdunkerly3f@redcross.org',
          first_name: 'Maryanne',
          last_name: 'Dunkerly',
          phone: '2022023604'
        },
        {
          username: 'cbearsmore3g',
          password: bcrypt.hashSync('X7dcIls', 10),
          email: 'cbearsmore3g@deviantart.com',
          first_name: 'Channa',
          last_name: 'Bearsmore',
          phone: '8366512624'
        },
        {
          username: 'lnaish3h',
          password: bcrypt.hashSync('GqWiICE8lTJ', 10),
          email: 'lnaish3h@weibo.com',
          first_name: 'Lucinda',
          last_name: 'Naish',
          phone: '7848418860'
        },
        {
          username: 'dboldra3i',
          password: bcrypt.hashSync('FI4U6nKwU', 10),
          email: 'dboldra3i@51.la',
          first_name: 'Danita',
          last_name: 'Boldra',
          phone: '3466379309'
        },
        {
          username: 'cbutlin3j',
          password: bcrypt.hashSync('kKKOgTGti', 10),
          email: 'cbutlin3j@flickr.com',
          first_name: 'Conrad',
          last_name: 'Butlin',
          phone: '8735973294'
        },
        {
          username: 'agonsalo3k',
          password: bcrypt.hashSync('c1tamHmc62z9', 10),
          email: 'agonsalo3k@discuz.net',
          first_name: 'Abagail',
          last_name: 'Gonsalo',
          phone: '7773006155'
        },
        {
          username: 'scotes3l',
          password: bcrypt.hashSync('d1sCCM1p6akC', 10),
          email: 'scotes3l@mlb.com',
          first_name: 'Sascha',
          last_name: 'Cotes',
          phone: '3428287217'
        },
        {
          username: 'ogabbatt3m',
          password: bcrypt.hashSync('dsxdZECS', 10),
          email: 'ogabbatt3m@eepurl.com',
          first_name: 'Orelia',
          last_name: 'Gabbatt',
          phone: '5954972385'
        },
        {
          username: 'bbowkett3n',
          password: bcrypt.hashSync('Am2Vy2', 10),
          email: 'bbowkett3n@jiathis.com',
          first_name: 'Base',
          last_name: 'Bowkett',
          phone: '6105460419'
        },
        {
          username: 'psawden3o',
          password: bcrypt.hashSync('Vf2LobU20', 10),
          email: 'psawden3o@booking.com',
          first_name: 'Paco',
          last_name: 'Sawden',
          phone: '6056375935'
        },
        {
          username: 'nfoker3p',
          password: bcrypt.hashSync('L7GOzzFNdij8', 10),
          email: 'nfoker3p@cmu.edu',
          first_name: 'Nellie',
          last_name: 'Foker',
          phone: '2618489928'
        },
        {
          username: 'mduro3q',
          password: bcrypt.hashSync('cI0RArZojI', 10),
          email: 'mduro3q@yahoo.com',
          first_name: 'Melanie',
          last_name: 'Duro',
          phone: '7947400752'
        },
        {
          username: 'phackney3r',
          password: bcrypt.hashSync('j6bjUcs7ER', 10),
          email: 'phackney3r@senate.gov',
          first_name: 'Pernell',
          last_name: 'Hackney',
          phone: '3767087806'
        },
        {
          username: 'cgregersen3s',
          password: bcrypt.hashSync('qgyCgO', 10),
          email: 'cgregersen3s@godaddy.com',
          first_name: 'Carmita',
          last_name: 'Gregersen',
          phone: '1459587082'
        },
        {
          username: 'ctitman3t',
          password: bcrypt.hashSync('D0ELPnuANK', 10),
          email: 'ctitman3t@cargocollective.com',
          first_name: 'Corabella',
          last_name: 'Titman',
          phone: '2533797386'
        },
        {
          username: 'ehutchens3u',
          password: bcrypt.hashSync('yOlwW1', 10),
          email: 'ehutchens3u@livejournal.com',
          first_name: 'Enrico',
          last_name: 'Hutchens',
          phone: '7825016020'
        },
        {
          username: 'bmcnelis3v',
          password: bcrypt.hashSync('wfdBcXsPbrR', 10),
          email: 'bmcnelis3v@dyndns.org',
          first_name: 'Betsey',
          last_name: 'McNelis',
          phone: '6685745805'
        },
        {
          username: 'adronsfield3w',
          password: bcrypt.hashSync('YfaYSzttg7', 10),
          email: 'adronsfield3w@reverbnation.com',
          first_name: 'Alexia',
          last_name: 'Dronsfield',
          phone: '2114812364'
        },
        {
          username: 'zbeahan3x',
          password: bcrypt.hashSync('8VRRPARG', 10),
          email: 'zbeahan3x@123-reg.co.uk',
          first_name: 'Zora',
          last_name: 'Beahan',
          phone: '6639572095'
        },
        {
          username: 'gdicey3y',
          password: bcrypt.hashSync('dYhk2CW2I7', 10),
          email: 'gdicey3y@list-manage.com',
          first_name: 'Guglielmo',
          last_name: 'Dicey',
          phone: '5122177873'
        },
        {
          username: 'cmacfarlane3z',
          password: bcrypt.hashSync('75Qd1uZCDW', 10),
          email: 'cmacfarlane3z@si.edu',
          first_name: 'Claudette',
          last_name: 'MacFarlane',
          phone: '2752286210'
        },
        {
          username: 'dscipsey40',
          password: bcrypt.hashSync('mlvJK1TIJx1s', 10),
          email: 'dscipsey40@mysql.com',
          first_name: 'Dunstan',
          last_name: 'Scipsey',
          phone: '4711301923'
        },
        {
          username: 'dcarstairs41',
          password: bcrypt.hashSync('NTPiMUE45YF', 10),
          email: 'dcarstairs41@msu.edu',
          first_name: 'Donall',
          last_name: 'Carstairs',
          phone: '3471361771'
        },
        {
          username: 'dloughnan42',
          password: bcrypt.hashSync('12JpdMAze', 10),
          email: 'dloughnan42@quantcast.com',
          first_name: 'Daisey',
          last_name: 'Loughnan',
          phone: '3941762353'
        },
        {
          username: 'gsmorthit43',
          password: bcrypt.hashSync('I0E7gB', 10),
          email: 'gsmorthit43@deviantart.com',
          first_name: 'Godwin',
          last_name: 'Smorthit',
          phone: '4832769063'
        },
        {
          username: 'aofer44',
          password: bcrypt.hashSync('WdjQil0f', 10),
          email: 'aofer44@fastcompany.com',
          first_name: 'Augustine',
          last_name: 'Ofer',
          phone: '9047735223'
        },
        {
          username: 'jlorrie45',
          password: bcrypt.hashSync('m0bX95k5HxF', 10),
          email: 'jlorrie45@hao123.com',
          first_name: 'Juliet',
          last_name: 'Lorrie',
          phone: '8163095658'
        },
        {
          username: 'dbridal46',
          password: bcrypt.hashSync('U3VF57', 10),
          email: 'dbridal46@state.tx.us',
          first_name: 'Davey',
          last_name: 'Bridal',
          phone: '4054064482'
        },
        {
          username: 'lwheildon47',
          password: bcrypt.hashSync('zVTXbReOF7tj', 10),
          email: 'lwheildon47@xing.com',
          first_name: 'Lucretia',
          last_name: 'Wheildon',
          phone: '7159164905'
        },
        {
          username: 'gduignan48',
          password: bcrypt.hashSync('FrPqWzW', 10),
          email: 'gduignan48@hud.gov',
          first_name: 'Galina',
          last_name: 'Duignan',
          phone: '2549265540'
        },
        {
          username: 'pchatel49',
          password: bcrypt.hashSync('AJpQYII8p6jt', 10),
          email: 'pchatel49@arstechnica.com',
          first_name: 'Philip',
          last_name: 'Chatel',
          phone: '7697941670'
        },
        {
          username: 'kdalgety4a',
          password: bcrypt.hashSync('VFQfeEWfCs', 10),
          email: 'kdalgety4a@w3.org',
          first_name: 'Karyl',
          last_name: 'Dalgety',
          phone: '6642715644'
        },
        {
          username: 'wgrassett4b',
          password: bcrypt.hashSync('YrlexTTkW', 10),
          email: 'wgrassett4b@github.com',
          first_name: 'Wanda',
          last_name: 'Grassett',
          phone: '8099424469'
        },
        {
          username: 'mlaurent4c',
          password: bcrypt.hashSync('D67kX8u3', 10),
          email: 'mlaurent4c@ft.com',
          first_name: 'Marya',
          last_name: 'Laurent',
          phone: '9466916281'
        },
        {
          username: 'sannets4d',
          password: bcrypt.hashSync('5QAfUB6fE2wi', 10),
          email: 'sannets4d@yandex.ru',
          first_name: 'Sidoney',
          last_name: 'Annets',
          phone: '9724179700'
        },
        {
          username: 'cgodfrey4e',
          password: bcrypt.hashSync('r4VXGtcr', 10),
          email: 'cgodfrey4e@cdbaby.com',
          first_name: 'Corliss',
          last_name: 'Godfrey',
          phone: '4337891630'
        },
        {
          username: 'ggiacobelli4f',
          password: bcrypt.hashSync('VhfcgSH', 10),
          email: 'ggiacobelli4f@behance.net',
          first_name: 'Gideon',
          last_name: 'Giacobelli',
          phone: '5316183477'
        },
        {
          username: 'kpresnail4g',
          password: bcrypt.hashSync('XCsCutlJOz', 10),
          email: 'kpresnail4g@weather.com',
          first_name: 'Karlan',
          last_name: 'Presnail',
          phone: '9925142739'
        },
        {
          username: 'tdelap4h',
          password: bcrypt.hashSync('Tkz5AAHbVtU', 10),
          email: 'tdelap4h@dailymail.co.uk',
          first_name: 'Tabina',
          last_name: 'Delap',
          phone: '6822240094'
        },
        {
          username: 'bsibson4i',
          password: bcrypt.hashSync('ocxfyngWX', 10),
          email: 'bsibson4i@senate.gov',
          first_name: 'Becki',
          last_name: 'Sibson',
          phone: '2713909173'
        },
        {
          username: 'cfaichney4j',
          password: bcrypt.hashSync('RIu7fTWB6fo2', 10),
          email: 'cfaichney4j@ihg.com',
          first_name: 'Crawford',
          last_name: 'Faichney',
          phone: '5736298924'
        },
        {
          username: 'dharsnep4k',
          password: bcrypt.hashSync('PsKSXcyr', 10),
          email: 'dharsnep4k@shop-pro.jp',
          first_name: 'Derby',
          last_name: 'Harsnep',
          phone: '5647446444'
        },
        {
          username: 'sscollick4l',
          password: bcrypt.hashSync('TM9PZWoyL7', 10),
          email: 'sscollick4l@statcounter.com',
          first_name: 'Sim',
          last_name: 'Scollick',
          phone: '6963688675'
        },
        {
          username: 'msimenon4m',
          password: bcrypt.hashSync('JFOAC3wXW', 10),
          email: 'msimenon4m@sfgate.com',
          first_name: 'Morna',
          last_name: 'Simenon',
          phone: '2988828325'
        },
        {
          username: 'clagde4n',
          password: bcrypt.hashSync('KuAGSTaKU2eR', 10),
          email: 'clagde4n@springer.com',
          first_name: 'Costa',
          last_name: 'Lagde',
          phone: '6405692617'
        },
        {
          username: 'sjedrzejczak4o',
          password: bcrypt.hashSync('c9InUK1', 10),
          email: 'sjedrzejczak4o@oaic.gov.au',
          first_name: 'Sande',
          last_name: 'Jedrzejczak',
          phone: '7577720090'
        },
        {
          username: 'swordington4p',
          password: bcrypt.hashSync('GU0pK73a0mp', 10),
          email: 'swordington4p@barnesandnoble.com',
          first_name: 'Sayres',
          last_name: 'Wordington',
          phone: '5281787595'
        },
        {
          username: 'dfierro4q',
          password: bcrypt.hashSync('nWP101AJsX', 10),
          email: 'dfierro4q@bloglovin.com',
          first_name: 'Dennie',
          last_name: 'Fierro',
          phone: '2981681083'
        },
        {
          username: 'rlanktree4r',
          password: bcrypt.hashSync('X0XhZdq', 10),
          email: 'rlanktree4r@nhs.uk',
          first_name: 'Roland',
          last_name: 'Lanktree',
          phone: '6185123601'
        },
        {
          username: 'hscothron4s',
          password: bcrypt.hashSync('uOoewaw0', 10),
          email: 'hscothron4s@mac.com',
          first_name: 'Heath',
          last_name: 'Scothron',
          phone: '1404876827'
        },
        {
          username: 'vglanville4t',
          password: bcrypt.hashSync('KjVF2E4Gr', 10),
          email: 'vglanville4t@topsy.com',
          first_name: 'Valencia',
          last_name: 'Glanville',
          phone: '4713269061'
        },
        {
          username: 'gdimatteo4u',
          password: bcrypt.hashSync('38VuTx', 10),
          email: 'gdimatteo4u@ask.com',
          first_name: 'Geoff',
          last_name: 'Di Matteo',
          phone: '6448258585'
        },
        {
          username: 'dgildea4v',
          password: bcrypt.hashSync('beykMno', 10),
          email: 'dgildea4v@harvard.edu',
          first_name: 'Donal',
          last_name: 'Gildea',
          phone: '9503484666'
        },
        {
          username: 'gmealing4w',
          password: bcrypt.hashSync('Hhcd89HuCUNi', 10),
          email: 'gmealing4w@issuu.com',
          first_name: 'Gillian',
          last_name: 'Mealing',
          phone: '5254012001'
        },
        {
          username: 'bmergue4x',
          password: bcrypt.hashSync('7zxShnEqD7', 10),
          email: 'bmergue4x@acquirethisname.com',
          first_name: 'Blanca',
          last_name: 'Mergue',
          phone: '8026054552'
        },
        {
          username: 'jperryn4y',
          password: bcrypt.hashSync('c8Ez44K', 10),
          email: 'jperryn4y@squarespace.com',
          first_name: 'Josee',
          last_name: 'Perryn',
          phone: '1254861222'
        },
        {
          username: 'dgyse4z',
          password: bcrypt.hashSync('rYoiEREbvJSq', 10),
          email: 'dgyse4z@domainmarket.com',
          first_name: 'Dickie',
          last_name: 'Gyse',
          phone: '5119721965'
        },
        {
          username: 'rtanslie50',
          password: bcrypt.hashSync('vBxI56F', 10),
          email: 'rtanslie50@addthis.com',
          first_name: 'Rickert',
          last_name: 'Tanslie',
          phone: '6204068659'
        },
        {
          username: 'hrewcastle51',
          password: bcrypt.hashSync('HfRC7asP7j89', 10),
          email: 'hrewcastle51@spiegel.de',
          first_name: 'Heidie',
          last_name: 'Rewcastle',
          phone: '3169782022'
        },
        {
          username: 'elamke52',
          password: bcrypt.hashSync('9vfhaClRN', 10),
          email: 'elamke52@people.com.cn',
          first_name: 'Ettie',
          last_name: 'Lamke',
          phone: '8924857865'
        },
        {
          username: 'gpellman53',
          password: bcrypt.hashSync('UHBNkTzW', 10),
          email: 'gpellman53@yelp.com',
          first_name: 'Granthem',
          last_name: 'Pellman',
          phone: '5316707263'
        },
        {
          username: 'eollie54',
          password: bcrypt.hashSync('se7o2HyqOW9', 10),
          email: 'eollie54@indiatimes.com',
          first_name: 'Elsie',
          last_name: 'Ollie',
          phone: '8496351652'
        },
        {
          username: 'rburnsall55',
          password: bcrypt.hashSync('13jLdNmq', 10),
          email: 'rburnsall55@unblog.fr',
          first_name: 'Reeba',
          last_name: 'Burnsall',
          phone: '9005226165'
        },
        {
          username: 'wletterese56',
          password: bcrypt.hashSync('nzo8wHkP6PCr', 10),
          email: 'wletterese56@vk.com',
          first_name: 'Wang',
          last_name: 'Letterese',
          phone: '3773228244'
        },
        {
          username: 'groth57',
          password: bcrypt.hashSync('HnjTC0MVa4v', 10),
          email: 'groth57@wordpress.org',
          first_name: 'Glen',
          last_name: 'Roth',
          phone: '8789911345'
        },
        {
          username: 'kstollberg58',
          password: bcrypt.hashSync('cQ88WAJnb', 10),
          email: 'kstollberg58@vk.com',
          first_name: 'Karly',
          last_name: 'Stollberg',
          phone: '3472850301'
        },
        {
          username: 'ddefrain59',
          password: bcrypt.hashSync('iLZJyMZb', 10),
          email: 'ddefrain59@w3.org',
          first_name: 'Danika',
          last_name: 'Defrain',
          phone: '5137766823'
        },
        {
          username: 'ttidcomb5a',
          password: bcrypt.hashSync('ctdr8IWgrY', 10),
          email: 'ttidcomb5a@usda.gov',
          first_name: 'Traci',
          last_name: 'Tidcomb',
          phone: '5918720824'
        },
        {
          username: 'ddunlea5b',
          password: bcrypt.hashSync('zh3BSO3Q', 10),
          email: 'ddunlea5b@cnbc.com',
          first_name: 'Danie',
          last_name: 'Dunlea',
          phone: '2892914860'
        },
        {
          username: 'mjullian5c',
          password: bcrypt.hashSync('7DkT8NWA', 10),
          email: 'mjullian5c@ucla.edu',
          first_name: 'Maye',
          last_name: 'Jullian',
          phone: '6961321724'
        },
        {
          username: 'ajoost5d',
          password: bcrypt.hashSync('BqjqF48', 10),
          email: 'ajoost5d@ftc.gov',
          first_name: 'Amandy',
          last_name: 'Joost',
          phone: '6647049824'
        },
        {
          username: 'lmquhan5e',
          password: bcrypt.hashSync('ELTabPecn', 10),
          email: 'lmquhan5e@stumbleupon.com',
          first_name: 'Lance',
          last_name: "M'Quhan",
          phone: '5385139671'
        },
        {
          username: 'mscorer5f',
          password: bcrypt.hashSync('mBTn37KvSZm', 10),
          email: 'mscorer5f@phoca.cz',
          first_name: 'Madeleine',
          last_name: 'Scorer',
          phone: '1417878601'
        },
        {
          username: 'psharpous5g',
          password: bcrypt.hashSync('4h968TP', 10),
          email: 'psharpous5g@wsj.com',
          first_name: 'Park',
          last_name: 'Sharpous',
          phone: '3445286540'
        },
        {
          username: 'msales5h',
          password: bcrypt.hashSync('ZnYPu6zi6ECW', 10),
          email: 'msales5h@behance.net',
          first_name: 'Mohammed',
          last_name: 'Sales',
          phone: '1224458920'
        },
        {
          username: 'slamy5i',
          password: bcrypt.hashSync('zaffsbD3lsb', 10),
          email: 'slamy5i@woothemes.com',
          first_name: 'Stephanie',
          last_name: 'Lamy',
          phone: '1054361266'
        },
        {
          username: 'rtod5j',
          password: bcrypt.hashSync('eKDN8x', 10),
          email: 'rtod5j@gravatar.com',
          first_name: 'Reyna',
          last_name: 'Tod',
          phone: '2586741496'
        },
        {
          username: 'tmetschke5k',
          password: bcrypt.hashSync('YMyD6TWpdE', 10),
          email: 'tmetschke5k@tumblr.com',
          first_name: 'Thatch',
          last_name: 'Metschke',
          phone: '6818312799'
        },
        {
          username: 'gelegood5l',
          password: bcrypt.hashSync('w9LjEq0GY', 10),
          email: 'gelegood5l@independent.co.uk',
          first_name: 'Gregoor',
          last_name: 'Elegood',
          phone: '8197156164'
        },
        {
          username: 'dboich5m',
          password: bcrypt.hashSync('Rxuywl6', 10),
          email: 'dboich5m@facebook.com',
          first_name: 'Drucy',
          last_name: 'Boich',
          phone: '4065560425'
        },
        {
          username: 'forthmann5n',
          password: bcrypt.hashSync('yF1yqXImr', 10),
          email: 'forthmann5n@scribd.com',
          first_name: 'Florri',
          last_name: 'Orthmann',
          phone: '3783068918'
        },
        {
          username: 'lcockshut5o',
          password: bcrypt.hashSync('8vCP8B1fl', 10),
          email: 'lcockshut5o@flavors.me',
          first_name: 'Lura',
          last_name: 'Cockshut',
          phone: '7638373595'
        },
        {
          username: 'kmordey5p',
          password: bcrypt.hashSync('BADMPL', 10),
          email: 'kmordey5p@dailymail.co.uk',
          first_name: 'Kimmi',
          last_name: 'Mordey',
          phone: '3411527251'
        },
        {
          username: 'cfraser5q',
          password: bcrypt.hashSync('GI64jS', 10),
          email: 'cfraser5q@cloudflare.com',
          first_name: 'Cindra',
          last_name: 'Fraser',
          phone: '7047343474'
        },
        {
          username: 'gmceachern5r',
          password: bcrypt.hashSync('NwiBIxStUz', 10),
          email: 'gmceachern5r@imgur.com',
          first_name: 'Gates',
          last_name: 'McEachern',
          phone: '6733444657'
        },
        {
          username: 'smayberry5s',
          password: bcrypt.hashSync('MoFDpd', 10),
          email: 'smayberry5s@tmall.com',
          first_name: 'Stanfield',
          last_name: 'Mayberry',
          phone: '2943118996'
        },
        {
          username: 'rlandrick5t',
          password: bcrypt.hashSync('dz7rjYm', 10),
          email: 'rlandrick5t@google.cn',
          first_name: 'Rosaleen',
          last_name: 'Landrick',
          phone: '4244468966'
        },
        {
          username: 'amalter5u',
          password: bcrypt.hashSync('kZ9FnvLrBPX', 10),
          email: 'amalter5u@comcast.net',
          first_name: 'Aleksandr',
          last_name: 'Malter',
          phone: '9289623314'
        },
        {
          username: 'ghubback5v',
          password: bcrypt.hashSync('zgNjUqE9Myu', 10),
          email: 'ghubback5v@eventbrite.com',
          first_name: 'Gene',
          last_name: 'Hubback',
          phone: '3991904585'
        },
        {
          username: 'cmaccorkell5w',
          password: bcrypt.hashSync('QEoPFKSEADcu', 10),
          email: 'cmaccorkell5w@plala.or.jp',
          first_name: 'Cordula',
          last_name: 'MacCorkell',
          phone: '6921012076'
        },
        {
          username: 'jchaffin5x',
          password: bcrypt.hashSync('9s9ouF47P', 10),
          email: 'jchaffin5x@reuters.com',
          first_name: 'Jamison',
          last_name: 'Chaffin',
          phone: '3763269673'
        },
        {
          username: 'ajeandeau5y',
          password: bcrypt.hashSync('1rbppnL5oo', 10),
          email: 'ajeandeau5y@ehow.com',
          first_name: 'Aeriell',
          last_name: 'Jeandeau',
          phone: '4396210085'
        },
        {
          username: 'rrama5z',
          password: bcrypt.hashSync('cOtIKv', 10),
          email: 'rrama5z@spotify.com',
          first_name: 'Rocky',
          last_name: 'Rama',
          phone: '6757179716'
        },
        {
          username: 'adury60',
          password: bcrypt.hashSync('MrdFECYM2Cr', 10),
          email: 'adury60@ox.ac.uk',
          first_name: 'Alaric',
          last_name: 'Dury',
          phone: '5101678780'
        },
        {
          username: 'glaurenceau61',
          password: bcrypt.hashSync('D6nOIAY', 10),
          email: 'glaurenceau61@free.fr',
          first_name: 'Garrot',
          last_name: 'Laurenceau',
          phone: '2037609237'
        },
        {
          username: 'mdenerley62',
          password: bcrypt.hashSync('BnS0f0Ky', 10),
          email: 'mdenerley62@cmu.edu',
          first_name: 'Mick',
          last_name: 'Denerley',
          phone: '5828967174'
        },
        {
          username: 'crawes63',
          password: bcrypt.hashSync('iUBVEP', 10),
          email: 'crawes63@tiny.cc',
          first_name: 'Curr',
          last_name: 'Rawes',
          phone: '8521211851'
        },
        {
          username: 'edonat64',
          password: bcrypt.hashSync('djjiYdz', 10),
          email: 'edonat64@moonfruit.com',
          first_name: 'Essy',
          last_name: 'Donat',
          phone: '7986707507'
        },
        {
          username: 'erobbie65',
          password: bcrypt.hashSync('kUG34rLQSW', 10),
          email: 'erobbie65@netlog.com',
          first_name: 'Efrem',
          last_name: 'Robbie',
          phone: '8012729693'
        },
        {
          username: 'amoules66',
          password: bcrypt.hashSync('1d5uN6SH', 10),
          email: 'amoules66@list-manage.com',
          first_name: 'Annabela',
          last_name: 'Moules',
          phone: '1359414312'
        },
        {
          username: 'ifussey67',
          password: bcrypt.hashSync('nI33QeCC94q', 10),
          email: 'ifussey67@ebay.co.uk',
          first_name: 'Irene',
          last_name: 'Fussey',
          phone: '3888623103'
        },
        {
          username: 'rspringell68',
          password: bcrypt.hashSync('StxXBRuy1', 10),
          email: 'rspringell68@barnesandnoble.com',
          first_name: 'Rourke',
          last_name: 'Springell',
          phone: '7611533849'
        },
        {
          username: 'mkillcross69',
          password: bcrypt.hashSync('xX1OB6cm', 10),
          email: 'mkillcross69@hugedomains.com',
          first_name: 'Mirabel',
          last_name: 'Killcross',
          phone: '5649648574'
        },
        {
          username: 'eeldrett6a',
          password: bcrypt.hashSync('N0HgZh1IKRj', 10),
          email: 'eeldrett6a@networksolutions.com',
          first_name: 'Elbert',
          last_name: 'Eldrett',
          phone: '5242198981'
        },
        {
          username: 'mbogaert6b',
          password: bcrypt.hashSync('rg8XdqX', 10),
          email: 'mbogaert6b@pagesperso-orange.fr',
          first_name: 'Mead',
          last_name: 'Bogaert',
          phone: '2939184939'
        },
        {
          username: 'ckinleyside6c',
          password: bcrypt.hashSync('imD7Gn', 10),
          email: 'ckinleyside6c@whitehouse.gov',
          first_name: 'Clementia',
          last_name: 'Kinleyside',
          phone: '5903677909'
        },
        {
          username: 'nfilinkov6d',
          password: bcrypt.hashSync('iizVeM9YzmI', 10),
          email: 'nfilinkov6d@cdc.gov',
          first_name: 'Naoma',
          last_name: 'Filinkov',
          phone: '3136248166'
        },
        {
          username: 'mfisby6e',
          password: bcrypt.hashSync('oPpfVK7aey', 10),
          email: 'mfisby6e@posterous.com',
          first_name: 'Miltie',
          last_name: 'Fisby',
          phone: '6358731668'
        },
        {
          username: 'iiiannone6f',
          password: bcrypt.hashSync('y4rLn05hr6', 10),
          email: 'iiiannone6f@nsw.gov.au',
          first_name: 'Ivett',
          last_name: 'Iiannone',
          phone: '7242912016'
        },
        {
          username: 'hendecott6g',
          password: bcrypt.hashSync('1WVWadMCCY', 10),
          email: 'hendecott6g@rambler.ru',
          first_name: 'Herschel',
          last_name: 'Endecott',
          phone: '2602273215'
        },
        {
          username: 'cthys6h',
          password: bcrypt.hashSync('AzjanDY', 10),
          email: 'cthys6h@statcounter.com',
          first_name: 'Clyve',
          last_name: 'Thys',
          phone: '4857371846'
        },
        {
          username: 'nvigurs6i',
          password: bcrypt.hashSync('nXzObh4o', 10),
          email: 'nvigurs6i@sbwire.com',
          first_name: 'Napoleon',
          last_name: 'Vigurs',
          phone: '1382740813'
        },
        {
          username: 'rbrunetti6j',
          password: bcrypt.hashSync('fZOwNVTalpM7', 10),
          email: 'rbrunetti6j@ucla.edu',
          first_name: 'Rube',
          last_name: 'Brunetti',
          phone: '9399254059'
        },
        {
          username: 'jfills6k',
          password: bcrypt.hashSync('fB4HJ4', 10),
          email: 'jfills6k@digg.com',
          first_name: 'Jereme',
          last_name: 'Fills',
          phone: '4878279833'
        },
        {
          username: 'cstruys6l',
          password: bcrypt.hashSync('1HhHjKlUrv', 10),
          email: 'cstruys6l@123-reg.co.uk',
          first_name: 'Courtney',
          last_name: 'Struys',
          phone: '4061547703'
        },
        {
          username: 'tdoyland6m',
          password: bcrypt.hashSync('HkiswLa9H', 10),
          email: 'tdoyland6m@last.fm',
          first_name: 'Theresita',
          last_name: 'Doyland',
          phone: '9197695801'
        },
        {
          username: 'sspenclay6n',
          password: bcrypt.hashSync('vTtTbd', 10),
          email: 'sspenclay6n@wp.com',
          first_name: 'Sherri',
          last_name: 'Spenclay',
          phone: '5769330910'
        },
        {
          username: 'rgrugerr6o',
          password: bcrypt.hashSync('75KjrJLwa2j2', 10),
          email: 'rgrugerr6o@businessweek.com',
          first_name: 'Raff',
          last_name: 'Grugerr',
          phone: '9144603192'
        },
        {
          username: 'lhegerty6p',
          password: bcrypt.hashSync('XofweApRD', 10),
          email: 'lhegerty6p@jigsy.com',
          first_name: 'Lyndel',
          last_name: 'Hegerty',
          phone: '5006860281'
        },
        {
          username: 'nrappport6q',
          password: bcrypt.hashSync('wXmQAe1', 10),
          email: 'nrappport6q@free.fr',
          first_name: 'Niccolo',
          last_name: 'Rappport',
          phone: '3482074190'
        },
        {
          username: 'lpimlett6r',
          password: bcrypt.hashSync('euU6hR6Gv', 10),
          email: 'lpimlett6r@nih.gov',
          first_name: 'Lenee',
          last_name: 'Pimlett',
          phone: '7221246048'
        },
        {
          username: 'pfyrth6s',
          password: bcrypt.hashSync('qOjPPaYh4ap7', 10),
          email: 'pfyrth6s@auda.org.au',
          first_name: 'Patrica',
          last_name: 'Fyrth',
          phone: '2603047360'
        },
        {
          username: 'chowison6t',
          password: bcrypt.hashSync('2KHO5M', 10),
          email: 'chowison6t@usa.gov',
          first_name: 'Charissa',
          last_name: 'Howison',
          phone: '5667469389'
        },
        {
          username: 'bhilland6u',
          password: bcrypt.hashSync('DDACnT6cKMe', 10),
          email: 'bhilland6u@spiegel.de',
          first_name: 'Brinna',
          last_name: 'Hilland',
          phone: '1506270176'
        },
        {
          username: 'ejedras6v',
          password: bcrypt.hashSync('RaP5Lra6', 10),
          email: 'ejedras6v@skyrock.com',
          first_name: 'Erhard',
          last_name: 'Jedras',
          phone: '3756559398'
        },
        {
          username: 'cdudderidge6w',
          password: bcrypt.hashSync('hxdoY2', 10),
          email: 'cdudderidge6w@ftc.gov',
          first_name: 'Carny',
          last_name: 'Dudderidge',
          phone: '9766408816'
        },
        {
          username: 'bcollimore6x',
          password: bcrypt.hashSync('oOsVrGx7JI9', 10),
          email: 'bcollimore6x@macromedia.com',
          first_name: 'Basilius',
          last_name: 'Collimore',
          phone: '5314986054'
        },
        {
          username: 'lmelody6y',
          password: bcrypt.hashSync('ufURjrnSvIs', 10),
          email: 'lmelody6y@tamu.edu',
          first_name: 'Lesya',
          last_name: 'Melody',
          phone: '2455420126'
        },
        {
          username: 'cspearing6z',
          password: bcrypt.hashSync('ZsckvH1YT0Tc', 10),
          email: 'cspearing6z@hud.gov',
          first_name: 'Carol',
          last_name: 'Spearing',
          phone: '7855281076'
        },
        {
          username: 'mzannetti70',
          password: bcrypt.hashSync('daJNfd', 10),
          email: 'mzannetti70@accuweather.com',
          first_name: 'Marti',
          last_name: 'Zannetti',
          phone: '6733819285'
        },
        {
          username: 'kjeeks71',
          password: bcrypt.hashSync('1gHN9jibpEXr', 10),
          email: 'kjeeks71@live.com',
          first_name: 'Kaleena',
          last_name: 'Jeeks',
          phone: '4324534265'
        },
        {
          username: 'jmcveigh72',
          password: bcrypt.hashSync('YN5WA3', 10),
          email: 'jmcveigh72@businessweek.com',
          first_name: 'Jozef',
          last_name: 'McVeigh',
          phone: '7178023812'
        },
        {
          username: 'rlongmore73',
          password: bcrypt.hashSync('TSxjLBpS7', 10),
          email: 'rlongmore73@ovh.net',
          first_name: 'Renata',
          last_name: 'Longmore',
          phone: '8802290710'
        },
        {
          username: 'pberthome74',
          password: bcrypt.hashSync('hLbv2wW', 10),
          email: 'pberthome74@tumblr.com',
          first_name: 'Pammi',
          last_name: 'Berthome',
          phone: '8858382474'
        },
        {
          username: 'dvandervelde75',
          password: bcrypt.hashSync('2d7OpmU2', 10),
          email: 'dvandervelde75@devhub.com',
          first_name: 'Desmond',
          last_name: 'Van der Velde',
          phone: '8023898430'
        },
        {
          username: 'gjambrozek76',
          password: bcrypt.hashSync('XZizVEXa', 10),
          email: 'gjambrozek76@flickr.com',
          first_name: 'Giselle',
          last_name: 'Jambrozek',
          phone: '9198078058'
        },
        {
          username: 'ssybbe77',
          password: bcrypt.hashSync('SYWMGzAkG', 10),
          email: 'ssybbe77@moonfruit.com',
          first_name: 'Sheela',
          last_name: 'Sybbe',
          phone: '7643100801'
        },
        {
          username: 'fsketchley78',
          password: bcrypt.hashSync('9ePaJYrikO', 10),
          email: 'fsketchley78@omniture.com',
          first_name: 'Filberto',
          last_name: 'Sketchley',
          phone: '4109516159'
        },
        {
          username: 'vschober79',
          password: bcrypt.hashSync('9PRITrkf5e', 10),
          email: 'vschober79@kickstarter.com',
          first_name: 'Vinny',
          last_name: 'Schober',
          phone: '1203293961'
        },
        {
          username: 'sgettings7a',
          password: bcrypt.hashSync('AkqlLIE', 10),
          email: 'sgettings7a@wp.com',
          first_name: 'Shane',
          last_name: 'Gettings',
          phone: '6793033466'
        },
        {
          username: 'idreinan7b',
          password: bcrypt.hashSync('VlRHOzmk6', 10),
          email: 'idreinan7b@boston.com',
          first_name: 'Imogene',
          last_name: 'Dreinan',
          phone: '7007233534'
        },
        {
          username: 'lhaggeth7c',
          password: bcrypt.hashSync('d0aF6R7', 10),
          email: 'lhaggeth7c@ow.ly',
          first_name: 'Lucias',
          last_name: 'Haggeth',
          phone: '9599215988'
        },
        {
          username: 'jlowthorpe7d',
          password: bcrypt.hashSync('dxjexRiR7r', 10),
          email: 'jlowthorpe7d@hhs.gov',
          first_name: 'Justis',
          last_name: 'Lowthorpe',
          phone: '9217517636'
        },
        {
          username: 'dkinglesyd7e',
          password: bcrypt.hashSync('pM6CmGZVfLb', 10),
          email: 'dkinglesyd7e@springer.com',
          first_name: 'Dorine',
          last_name: 'Kinglesyd',
          phone: '1466115828'
        },
        {
          username: 'mbawden7f',
          password: bcrypt.hashSync('EEDQm6', 10),
          email: 'mbawden7f@newyorker.com',
          first_name: 'Murielle',
          last_name: 'Bawden',
          phone: '1557368287'
        },
        {
          username: 'mmcfarland7g',
          password: bcrypt.hashSync('OtOBbmhuxjBd', 10),
          email: 'mmcfarland7g@tmall.com',
          first_name: 'Mildred',
          last_name: 'McFarland',
          phone: '4442515652'
        },
        {
          username: 'wfanshaw7h',
          password: bcrypt.hashSync('xuKJCuxv6', 10),
          email: 'wfanshaw7h@angelfire.com',
          first_name: 'Walliw',
          last_name: 'Fanshaw',
          phone: '3168906984'
        },
        {
          username: 'nmelonby7i',
          password: bcrypt.hashSync('Iv1td7lc6', 10),
          email: 'nmelonby7i@fc2.com',
          first_name: 'Nessi',
          last_name: 'Melonby',
          phone: '7057995099'
        },
        {
          username: 'nreah7j',
          password: bcrypt.hashSync('WpHFeXrS', 10),
          email: 'nreah7j@gravatar.com',
          first_name: 'Niven',
          last_name: 'Reah',
          phone: '7739305457'
        },
        {
          username: 'nkubala7k',
          password: bcrypt.hashSync('o4BGrG', 10),
          email: 'nkubala7k@oracle.com',
          first_name: 'Natty',
          last_name: 'Kubala',
          phone: '3044593888'
        },
        {
          username: 'zdunmuir7l',
          password: bcrypt.hashSync('gzQ8SF4t34', 10),
          email: 'zdunmuir7l@hugedomains.com',
          first_name: 'Zilvia',
          last_name: 'Dunmuir',
          phone: '3785043685'
        },
        {
          username: 'lbelliveau7m',
          password: bcrypt.hashSync('mA8Rn1yKEJ4', 10),
          email: 'lbelliveau7m@tumblr.com',
          first_name: 'Laryssa',
          last_name: 'Belliveau',
          phone: '2928423683'
        },
        {
          username: 'tpresman7n',
          password: bcrypt.hashSync('xsTckkj', 10),
          email: 'tpresman7n@istockphoto.com',
          first_name: 'Temp',
          last_name: 'Presman',
          phone: '5779667687'
        },
        {
          username: 'hballach7o',
          password: bcrypt.hashSync('9W4VeeHbsn', 10),
          email: 'hballach7o@bloglovin.com',
          first_name: 'Helyn',
          last_name: 'Ballach',
          phone: '8236698722'
        },
        {
          username: 'smoulton7p',
          password: bcrypt.hashSync('oku9FiCe6Ib', 10),
          email: 'smoulton7p@ow.ly',
          first_name: 'Sybyl',
          last_name: 'Moulton',
          phone: '9195312067'
        },
        {
          username: 'dgimeno7q',
          password: bcrypt.hashSync('ayS8QSAmeHEC', 10),
          email: 'dgimeno7q@ucsd.edu',
          first_name: 'Dallis',
          last_name: 'Gimeno',
          phone: '8441612606'
        },
        {
          username: 'prendle7r',
          password: bcrypt.hashSync('8jE67vxmJ', 10),
          email: 'prendle7r@seesaa.net',
          first_name: 'Prinz',
          last_name: 'Rendle',
          phone: '3168324206'
        },
        {
          username: 'elosbie7s',
          password: bcrypt.hashSync('LGuB7NMU', 10),
          email: 'elosbie7s@goo.ne.jp',
          first_name: 'Eleonore',
          last_name: 'Losbie',
          phone: '5682992573'
        },
        {
          username: 'smantrip7t',
          password: bcrypt.hashSync('ehSxLF56v', 10),
          email: 'smantrip7t@phpbb.com',
          first_name: 'Steve',
          last_name: 'Mantrip',
          phone: '7213277932'
        },
        {
          username: 'esnodin7u',
          password: bcrypt.hashSync('oggKai', 10),
          email: 'esnodin7u@alibaba.com',
          first_name: 'Eugenia',
          last_name: 'Snodin',
          phone: '1015198913'
        },
        {
          username: 'hlaugier7v',
          password: bcrypt.hashSync('k2Elm436', 10),
          email: 'hlaugier7v@guardian.co.uk',
          first_name: 'Herta',
          last_name: 'Laugier',
          phone: '4334687740'
        },
        {
          username: 'egligori7w',
          password: bcrypt.hashSync('a8Wste', 10),
          email: 'egligori7w@netscape.com',
          first_name: 'Eustace',
          last_name: 'Gligori',
          phone: '1191215301'
        },
        {
          username: 'aesel7x',
          password: bcrypt.hashSync('YNDwwjZx1Kci', 10),
          email: 'aesel7x@marriott.com',
          first_name: 'Alair',
          last_name: 'Esel',
          phone: '2213316130'
        },
        {
          username: 'bdelia7y',
          password: bcrypt.hashSync('Gvslg8cxNk', 10),
          email: 'bdelia7y@weibo.com',
          first_name: 'Berny',
          last_name: 'Delia',
          phone: '2555711155'
        },
        {
          username: 'srefford7z',
          password: bcrypt.hashSync('GQxxTUas9wZ', 10),
          email: 'srefford7z@sohu.com',
          first_name: 'Sidonnie',
          last_name: 'Refford',
          phone: '5157620524'
        },
        {
          username: 'ctern80',
          password: bcrypt.hashSync('DOx9CpufaS', 10),
          email: 'ctern80@redcross.org',
          first_name: 'Charin',
          last_name: 'Tern',
          phone: '4484132914'
        },
        {
          username: 'nwillcocks81',
          password: bcrypt.hashSync('vYp0NNdH', 10),
          email: 'nwillcocks81@tuttocitta.it',
          first_name: 'Nona',
          last_name: 'Willcocks',
          phone: '6309898463'
        },
        {
          username: 'bgillings82',
          password: bcrypt.hashSync('QtI4wa', 10),
          email: 'bgillings82@archive.org',
          first_name: 'Bar',
          last_name: 'Gillings',
          phone: '4856787700'
        },
        {
          username: 'poldershaw83',
          password: bcrypt.hashSync('jaXDcCLPz', 10),
          email: 'poldershaw83@instagram.com',
          first_name: 'Paige',
          last_name: 'Oldershaw',
          phone: '1397157534'
        },
        {
          username: 'bcestard84',
          password: bcrypt.hashSync('Pa35ksZvtTSW', 10),
          email: 'bcestard84@apple.com',
          first_name: 'Bond',
          last_name: 'Cestard',
          phone: '3232036569'
        },
        {
          username: 'staffley85',
          password: bcrypt.hashSync('dwzQv8vKQ9', 10),
          email: 'staffley85@virginia.edu',
          first_name: 'Spencer',
          last_name: 'Taffley',
          phone: '9543019890'
        },
        {
          username: 'krusk86',
          password: bcrypt.hashSync('HePNCqPxl', 10),
          email: 'krusk86@pen.io',
          first_name: 'Kylila',
          last_name: 'Rusk',
          phone: '5777352662'
        },
        {
          username: 'cghelardoni87',
          password: bcrypt.hashSync('bSD2qnyK', 10),
          email: 'cghelardoni87@jimdo.com',
          first_name: 'Charity',
          last_name: 'Ghelardoni',
          phone: '3522126129'
        },
        {
          username: 'cduplan88',
          password: bcrypt.hashSync('NPUOHtf3Cvce', 10),
          email: 'cduplan88@plala.or.jp',
          first_name: 'Cari',
          last_name: 'Duplan',
          phone: '4159210451'
        },
        {
          username: 'awhines89',
          password: bcrypt.hashSync('TCEfKaHALYT', 10),
          email: 'awhines89@histats.com',
          first_name: 'Aveline',
          last_name: 'Whines',
          phone: '7549645905'
        },
        {
          username: 'ggownge8a',
          password: bcrypt.hashSync('JtxyWva3', 10),
          email: 'ggownge8a@mtv.com',
          first_name: 'Guendolen',
          last_name: 'Gownge',
          phone: '7714276476'
        },
        {
          username: 'mcopson8b',
          password: bcrypt.hashSync('qOTtEln0', 10),
          email: 'mcopson8b@acquirethisname.com',
          first_name: 'Miles',
          last_name: 'Copson',
          phone: '6894813264'
        },
        {
          username: 'nmordanti8c',
          password: bcrypt.hashSync('7s8nQia6nlK', 10),
          email: 'nmordanti8c@umn.edu',
          first_name: 'Nancie',
          last_name: 'Mordanti',
          phone: '9779611457'
        },
        {
          username: 'nsherrock8d',
          password: bcrypt.hashSync('d42Pc0sJEg0W', 10),
          email: 'nsherrock8d@netvibes.com',
          first_name: 'Nicolas',
          last_name: 'Sherrock',
          phone: '2155298103'
        },
        {
          username: 'lwilmut8e',
          password: bcrypt.hashSync('76CzEc6xF', 10),
          email: 'lwilmut8e@live.com',
          first_name: 'Larissa',
          last_name: 'Wilmut',
          phone: '5871679974'
        },
        {
          username: 'bgapp8f',
          password: bcrypt.hashSync('rClW0AaKR', 10),
          email: 'bgapp8f@so-net.ne.jp',
          first_name: 'Boris',
          last_name: 'Gapp',
          phone: '9056275280'
        },
        {
          username: 'omusprat8g',
          password: bcrypt.hashSync('p1ooihNHfS', 10),
          email: 'omusprat8g@myspace.com',
          first_name: 'Osmond',
          last_name: 'Musprat',
          phone: '1136773560'
        },
        {
          username: 'jternault8h',
          password: bcrypt.hashSync('8xC2DV', 10),
          email: 'jternault8h@google.it',
          first_name: 'Juli',
          last_name: 'Ternault',
          phone: '8576920601'
        },
        {
          username: 'dpostance8i',
          password: bcrypt.hashSync('MVjPOE87ZriO', 10),
          email: 'dpostance8i@edublogs.org',
          first_name: 'Darrelle',
          last_name: 'Postance',
          phone: '6793365485'
        },
        {
          username: 'hchantree8j',
          password: bcrypt.hashSync('UzASMiuzTSgH', 10),
          email: 'hchantree8j@squarespace.com',
          first_name: 'Hershel',
          last_name: 'Chantree',
          phone: '3127169471'
        },
        {
          username: 'dgillet8k',
          password: bcrypt.hashSync('TQU0W2i', 10),
          email: 'dgillet8k@icq.com',
          first_name: 'Deloris',
          last_name: 'Gillet',
          phone: '3148223464'
        },
        {
          username: 'mlorimer8l',
          password: bcrypt.hashSync('Bioxlww40', 10),
          email: 'mlorimer8l@dedecms.com',
          first_name: 'Mannie',
          last_name: 'Lorimer',
          phone: '9487695248'
        },
        {
          username: 'ggrinaugh8m',
          password: bcrypt.hashSync('gxIOwLqdq', 10),
          email: 'ggrinaugh8m@yahoo.co.jp',
          first_name: 'Giffy',
          last_name: 'Grinaugh',
          phone: '7905248143'
        },
        {
          username: 'bsnoxall8n',
          password: bcrypt.hashSync('dsVlg3dtns', 10),
          email: 'bsnoxall8n@usatoday.com',
          first_name: 'Broddy',
          last_name: 'Snoxall',
          phone: '8401191178'
        },
        {
          username: 'wseaton8o',
          password: bcrypt.hashSync('wmnPZpQchq', 10),
          email: 'wseaton8o@drupal.org',
          first_name: 'Whitaker',
          last_name: 'Seaton',
          phone: '7558944429'
        },
        {
          username: 'awhal8p',
          password: bcrypt.hashSync('7TPQmDB', 10),
          email: 'awhal8p@narod.ru',
          first_name: 'Allie',
          last_name: 'Whal',
          phone: '3004618773'
        },
        {
          username: 'pdowne8q',
          password: bcrypt.hashSync('npTCoS', 10),
          email: 'pdowne8q@123-reg.co.uk',
          first_name: 'Philippe',
          last_name: 'Downe',
          phone: '4318669720'
        },
        {
          username: 'cambler8r',
          password: bcrypt.hashSync('HZwdBRhVg', 10),
          email: 'cambler8r@hao123.com',
          first_name: 'Cam',
          last_name: 'Ambler',
          phone: '5954210080'
        },
        {
          username: 'efellgate8s',
          password: bcrypt.hashSync('WOaTM1YlPE', 10),
          email: 'efellgate8s@theguardian.com',
          first_name: 'Elfrida',
          last_name: 'Fellgate',
          phone: '7262118200'
        },
        {
          username: 'ddimaggio8t',
          password: bcrypt.hashSync('3opwr7', 10),
          email: 'ddimaggio8t@latimes.com',
          first_name: 'Dieter',
          last_name: 'Di Maggio',
          phone: '3058088061'
        },
        {
          username: 'bfleury8u',
          password: bcrypt.hashSync('7b47cJ', 10),
          email: 'bfleury8u@statcounter.com',
          first_name: 'Billie',
          last_name: 'Fleury',
          phone: '3701312586'
        },
        {
          username: 'relman8v',
          password: bcrypt.hashSync('FRaKowsi0wN', 10),
          email: 'relman8v@is.gd',
          first_name: 'Rod',
          last_name: 'Elman',
          phone: '3596187258'
        },
        {
          username: 'mchittim8w',
          password: bcrypt.hashSync('DvRoXMfTK', 10),
          email: 'mchittim8w@baidu.com',
          first_name: 'Mahmud',
          last_name: 'Chittim',
          phone: '2759257447'
        },
        {
          username: 'rtripean8x',
          password: bcrypt.hashSync('RI9TzPnCip', 10),
          email: 'rtripean8x@ft.com',
          first_name: 'Rafi',
          last_name: 'Tripean',
          phone: '4339673301'
        },
        {
          username: 'bbullar8y',
          password: bcrypt.hashSync('XqESwKo6', 10),
          email: 'bbullar8y@fotki.com',
          first_name: 'Brittni',
          last_name: 'Bullar',
          phone: '4841078718'
        },
        {
          username: 'kallright8z',
          password: bcrypt.hashSync('D5wjEKLUxjU', 10),
          email: 'kallright8z@youtube.com',
          first_name: 'Kylynn',
          last_name: 'Allright',
          phone: '2302361808'
        },
        {
          username: 'jtwaits90',
          password: bcrypt.hashSync('ELoWsiAN', 10),
          email: 'jtwaits90@ustream.tv',
          first_name: 'Juli',
          last_name: 'Twaits',
          phone: '2177753845'
        },
        {
          username: 'bakrigg91',
          password: bcrypt.hashSync('7OUdr1Uig', 10),
          email: 'bakrigg91@nyu.edu',
          first_name: 'Bethany',
          last_name: 'Akrigg',
          phone: '2799691657'
        },
        {
          username: 'hnairne92',
          password: bcrypt.hashSync('sRbVOdk7ClC', 10),
          email: 'hnairne92@jugem.jp',
          first_name: 'Haleigh',
          last_name: 'Nairne',
          phone: '8978202567'
        },
        {
          username: 'rfeeham93',
          password: bcrypt.hashSync('FLC7zkLijMN', 10),
          email: 'rfeeham93@baidu.com',
          first_name: 'Rosina',
          last_name: 'Feeham',
          phone: '2697892052'
        },
        {
          username: 'jkopec94',
          password: bcrypt.hashSync('b4N6D73hR', 10),
          email: 'jkopec94@kickstarter.com',
          first_name: 'Joannes',
          last_name: 'Kopec',
          phone: '9092281836'
        },
        {
          username: 'srosellini95',
          password: bcrypt.hashSync('XofMLAuXt', 10),
          email: 'srosellini95@unc.edu',
          first_name: 'Star',
          last_name: 'Rosellini',
          phone: '7999656996'
        },
        {
          username: 'rwenzel96',
          password: bcrypt.hashSync('ilrkZ3D', 10),
          email: 'rwenzel96@imgur.com',
          first_name: 'Randal',
          last_name: 'Wenzel',
          phone: '6198645078'
        },
        {
          username: 'mcrawforth97',
          password: bcrypt.hashSync('JPq1or504', 10),
          email: 'mcrawforth97@google.cn',
          first_name: 'Michell',
          last_name: 'Crawforth',
          phone: '2211230278'
        },
        {
          username: 'hlemaitre98',
          password: bcrypt.hashSync('j1UFgWBVnf', 10),
          email: 'hlemaitre98@google.fr',
          first_name: 'Haleigh',
          last_name: 'Le Maitre',
          phone: '2103491590'
        },
        {
          username: 'rguido99',
          password: bcrypt.hashSync('PKjLLAiG', 10),
          email: 'rguido99@apple.com',
          first_name: 'Rosina',
          last_name: 'Guido',
          phone: '2282585031'
        },
        {
          username: 'bbiagi9a',
          password: bcrypt.hashSync('tmTvmevdEPT', 10),
          email: 'bbiagi9a@biblegateway.com',
          first_name: 'Brena',
          last_name: 'Biagi',
          phone: '3068756374'
        },
        {
          username: 'bkyte9b',
          password: bcrypt.hashSync('OlT2vXVsNUy', 10),
          email: 'bkyte9b@tamu.edu',
          first_name: 'Brade',
          last_name: 'Kyte',
          phone: '4196984851'
        },
        {
          username: 'mguidotti9c',
          password: bcrypt.hashSync('sH8fsJ', 10),
          email: 'mguidotti9c@youtube.com',
          first_name: 'Marita',
          last_name: 'Guidotti',
          phone: '2565637927'
        },
        {
          username: 'caudrey9d',
          password: bcrypt.hashSync('sHBf5MnYnVH', 10),
          email: 'caudrey9d@sakura.ne.jp',
          first_name: 'Clarke',
          last_name: 'Audrey',
          phone: '7676613041'
        },
        {
          username: 'smathieson9e',
          password: bcrypt.hashSync('h2b25sOfd', 10),
          email: 'smathieson9e@cloudflare.com',
          first_name: 'Sander',
          last_name: 'Mathieson',
          phone: '7583936232'
        },
        {
          username: 'yboffin9f',
          password: bcrypt.hashSync('wd8KYG8mmIYe', 10),
          email: 'yboffin9f@github.io',
          first_name: 'Yvonne',
          last_name: 'Boffin',
          phone: '6551000222'
        },
        {
          username: 'koxherd9g',
          password: bcrypt.hashSync('Vl2DtGxFvHpI', 10),
          email: 'koxherd9g@furl.net',
          first_name: 'Kathye',
          last_name: 'Oxherd',
          phone: '4433468633'
        },
        {
          username: 'eskillitt9h',
          password: bcrypt.hashSync('yIED4h', 10),
          email: 'eskillitt9h@cdbaby.com',
          first_name: 'Emmye',
          last_name: 'Skillitt',
          phone: '6192097254'
        },
        {
          username: 'erame9i',
          password: bcrypt.hashSync('NAQRovmx', 10),
          email: 'erame9i@sphinn.com',
          first_name: 'Eward',
          last_name: 'Rame',
          phone: '1871888690'
        },
        {
          username: 'nradbone9j',
          password: bcrypt.hashSync('BQy0xeyW', 10),
          email: 'nradbone9j@webs.com',
          first_name: 'Nady',
          last_name: 'Radbone',
          phone: '6007441308'
        },
        {
          username: 'rgilbane9k',
          password: bcrypt.hashSync('wSTuEEl', 10),
          email: 'rgilbane9k@linkedin.com',
          first_name: 'Roy',
          last_name: 'Gilbane',
          phone: '8624999064'
        },
        {
          username: 'melsop9l',
          password: bcrypt.hashSync('7X0zq0vH', 10),
          email: 'melsop9l@istockphoto.com',
          first_name: 'Marcille',
          last_name: 'Elsop',
          phone: '9134867670'
        },
        {
          username: 'sbagott9m',
          password: bcrypt.hashSync('hh481wIL', 10),
          email: 'sbagott9m@themeforest.net',
          first_name: 'Susi',
          last_name: 'Bagott',
          phone: '9376414026'
        },
        {
          username: 'rfinnes9n',
          password: bcrypt.hashSync('mm4mHsNrN', 10),
          email: 'rfinnes9n@sfgate.com',
          first_name: 'Rhona',
          last_name: 'Finnes',
          phone: '5422129516'
        },
        {
          username: 'lrobers9o',
          password: bcrypt.hashSync('bixDvmD', 10),
          email: 'lrobers9o@dyndns.org',
          first_name: 'Leila',
          last_name: 'Robers',
          phone: '9286145080'
        },
        {
          username: 'mrenfield9p',
          password: bcrypt.hashSync('RTOGXK', 10),
          email: 'mrenfield9p@about.me',
          first_name: 'Marna',
          last_name: 'Renfield',
          phone: '6327853593'
        },
        {
          username: 'cwaight9q',
          password: bcrypt.hashSync('Iij7fSqKiDjO', 10),
          email: 'cwaight9q@biglobe.ne.jp',
          first_name: 'Corabella',
          last_name: 'Waight',
          phone: '1337729623'
        },
        {
          username: 'okrause9r',
          password: bcrypt.hashSync('6eDRlpKd', 10),
          email: 'okrause9r@rambler.ru',
          first_name: 'Oswell',
          last_name: 'Krause',
          phone: '9673367977'
        },
        {
          username: 'omottley9s',
          password: bcrypt.hashSync('2KjSi9Uj', 10),
          email: 'omottley9s@adobe.com',
          first_name: 'Ondrea',
          last_name: 'Mottley',
          phone: '5637974866'
        },
        {
          username: 'dgegg9t',
          password: bcrypt.hashSync('MxQdeUiTphnP', 10),
          email: 'dgegg9t@businesswire.com',
          first_name: 'Dare',
          last_name: 'Gegg',
          phone: '4821975141'
        },
        {
          username: 'cgregorace9u',
          password: bcrypt.hashSync('xDsAt2AsL3', 10),
          email: 'cgregorace9u@slashdot.org',
          first_name: 'Chadwick',
          last_name: 'Gregorace',
          phone: '2727350530'
        },
        {
          username: 'mchastney9v',
          password: bcrypt.hashSync('ExdDXg', 10),
          email: 'mchastney9v@yandex.ru',
          first_name: 'Minna',
          last_name: 'Chastney',
          phone: '9738872806'
        },
        {
          username: 'aalf9w',
          password: bcrypt.hashSync('xUsWP6xnA', 10),
          email: 'aalf9w@un.org',
          first_name: 'Adrien',
          last_name: 'Alf',
          phone: '3349502177'
        },
        {
          username: 'ebilbrook9x',
          password: bcrypt.hashSync('DNLNYx', 10),
          email: 'ebilbrook9x@cbsnews.com',
          first_name: 'Esmaria',
          last_name: 'Bilbrook',
          phone: '1265558156'
        },
        {
          username: 'mchevin9y',
          password: bcrypt.hashSync('Xr6JDN', 10),
          email: 'mchevin9y@china.com.cn',
          first_name: 'Molli',
          last_name: 'Chevin',
          phone: '3605414533'
        },
        {
          username: 'egoalby9z',
          password: bcrypt.hashSync('C9FBaj', 10),
          email: 'egoalby9z@noaa.gov',
          first_name: 'Ema',
          last_name: 'Goalby',
          phone: '9398546650'
        },
        {
          username: 'mbrusina0',
          password: bcrypt.hashSync('JLWuV87R', 10),
          email: 'mbrusina0@tripadvisor.com',
          first_name: 'Moise',
          last_name: 'Brusin',
          phone: '5933161691'
        },
        {
          username: 'gflyea1',
          password: bcrypt.hashSync('Kzpi0DbsuS', 10),
          email: 'gflyea1@ameblo.jp',
          first_name: 'Gregor',
          last_name: 'Flye',
          phone: '2818013772'
        },
        {
          username: 'geveralla2',
          password: bcrypt.hashSync('Nhgxzsws', 10),
          email: 'geveralla2@hexun.com',
          first_name: 'Graham',
          last_name: 'Everall',
          phone: '5165243161'
        },
        {
          username: 'ctremoillea3',
          password: bcrypt.hashSync('eJU5SChoXHa', 10),
          email: 'ctremoillea3@noaa.gov',
          first_name: 'Carline',
          last_name: 'Tremoille',
          phone: '7527228700'
        },
        {
          username: 'lmallinsona4',
          password: bcrypt.hashSync('ebUlqgF', 10),
          email: 'lmallinsona4@is.gd',
          first_name: 'Llewellyn',
          last_name: 'Mallinson',
          phone: '7384526835'
        },
        {
          username: 'abelseya5',
          password: bcrypt.hashSync('R8aeEgt1Ili', 10),
          email: 'abelseya5@smugmug.com',
          first_name: 'Abbie',
          last_name: 'Belsey',
          phone: '9576356285'
        },
        {
          username: 'ljeppa6',
          password: bcrypt.hashSync('alr4rEFu', 10),
          email: 'ljeppa6@privacy.gov.au',
          first_name: 'Leese',
          last_name: 'Jepp',
          phone: '7766427812'
        },
        {
          username: 'slinkiea7',
          password: bcrypt.hashSync('cr3WBPlrvS', 10),
          email: 'slinkiea7@hostgator.com',
          first_name: 'Sayres',
          last_name: 'Linkie',
          phone: '2021321588'
        },
        {
          username: 'tgaltona8',
          password: bcrypt.hashSync('lZKhmRFpH', 10),
          email: 'tgaltona8@imgur.com',
          first_name: 'Ted',
          last_name: 'Galton',
          phone: '2713185746'
        },
        {
          username: 'fdemeridaa9',
          password: bcrypt.hashSync('eMv7pnsJVkm', 10),
          email: 'fdemeridaa9@issuu.com',
          first_name: 'Fernandina',
          last_name: 'de Merida',
          phone: '6066326918'
        },
        {
          username: 'jflucksaa',
          password: bcrypt.hashSync('XQ5bewqvG5', 10),
          email: 'jflucksaa@oaic.gov.au',
          first_name: 'Joann',
          last_name: 'Flucks',
          phone: '4879133312'
        },
        {
          username: 'dsanbrookab',
          password: bcrypt.hashSync('d2mVAOpN2k', 10),
          email: 'dsanbrookab@sciencedirect.com',
          first_name: 'Derick',
          last_name: 'Sanbrook',
          phone: '9439716657'
        },
        {
          username: 'cmclanaghanac',
          password: bcrypt.hashSync('sVChU0cEb', 10),
          email: 'cmclanaghanac@google.fr',
          first_name: 'Christan',
          last_name: 'McLanaghan',
          phone: '1876697323'
        },
        {
          username: 'mbassilashviliad',
          password: bcrypt.hashSync('pOfRekidvmB2', 10),
          email: 'mbassilashviliad@un.org',
          first_name: 'Mick',
          last_name: 'Bassilashvili',
          phone: '3009927536'
        },
        {
          username: 'vsidebottomae',
          password: bcrypt.hashSync('EyC2An', 10),
          email: 'vsidebottomae@hexun.com',
          first_name: 'Verena',
          last_name: 'Sidebottom',
          phone: '7804640877'
        },
        {
          username: 'tdeinertaf',
          password: bcrypt.hashSync('dRCNdkqAqv', 10),
          email: 'tdeinertaf@shop-pro.jp',
          first_name: 'Tanitansy',
          last_name: 'Deinert',
          phone: '8852986277'
        },
        {
          username: 'dpinhornag',
          password: bcrypt.hashSync('QrQtfE6', 10),
          email: 'dpinhornag@sakura.ne.jp',
          first_name: 'Davie',
          last_name: 'Pinhorn',
          phone: '1709749874'
        },
        {
          username: 'jjerzakah',
          password: bcrypt.hashSync('pABoPGCSFKFD', 10),
          email: 'jjerzakah@bbc.co.uk',
          first_name: 'Julietta',
          last_name: 'Jerzak',
          phone: '9279174229'
        },
        {
          username: 'craymanai',
          password: bcrypt.hashSync('10ZSxCCD', 10),
          email: 'craymanai@t-online.de',
          first_name: 'Cullie',
          last_name: 'Rayman',
          phone: '9226131196'
        },
        {
          username: 'kbloyesaj',
          password: bcrypt.hashSync('011AvwwuxH', 10),
          email: 'kbloyesaj@stumbleupon.com',
          first_name: 'Keefer',
          last_name: 'Bloyes',
          phone: '2764246023'
        },
        {
          username: 'ndigginsak',
          password: bcrypt.hashSync('y4Nl5s6jY', 10),
          email: 'ndigginsak@soup.io',
          first_name: 'Nester',
          last_name: 'Diggins',
          phone: '6383541977'
        },
        {
          username: 'lridesdaleal',
          password: bcrypt.hashSync('HvtnWwSHHEY', 10),
          email: 'lridesdaleal@jiathis.com',
          first_name: 'Lind',
          last_name: 'Ridesdale',
          phone: '3282496621'
        },
        {
          username: 'ebaueram',
          password: bcrypt.hashSync('wftZtGc', 10),
          email: 'ebaueram@unc.edu',
          first_name: 'Elga',
          last_name: 'Bauer',
          phone: '6116477477'
        },
        {
          username: 'ggontieran',
          password: bcrypt.hashSync('r1aXhVwPtynH', 10),
          email: 'ggontieran@instagram.com',
          first_name: 'Gibby',
          last_name: 'Gontier',
          phone: '3757177515'
        },
        {
          username: 'tlincolnao',
          password: bcrypt.hashSync('gY3CcD7', 10),
          email: 'tlincolnao@webnode.com',
          first_name: 'Thaine',
          last_name: 'Lincoln',
          phone: '1783106818'
        },
        {
          username: 'rheakinsap',
          password: bcrypt.hashSync('z7kNNTEEop', 10),
          email: 'rheakinsap@w3.org',
          first_name: 'Rhetta',
          last_name: 'Heakins',
          phone: '7468623191'
        },
        {
          username: 'blannonaq',
          password: bcrypt.hashSync('UpXakPXfn7', 10),
          email: 'blannonaq@usnews.com',
          first_name: 'Barbey',
          last_name: 'Lannon',
          phone: '1324447197'
        },
        {
          username: 'dcarstairsar',
          password: bcrypt.hashSync('OFnFrrXNvJTv', 10),
          email: 'dcarstairsar@dailymotion.com',
          first_name: 'Dewain',
          last_name: 'Carstairs',
          phone: '9592886938'
        },
        {
          username: 'asawleas',
          password: bcrypt.hashSync('whiYuBeT9F5', 10),
          email: 'asawleas@usgs.gov',
          first_name: 'Alexio',
          last_name: 'Sawle',
          phone: '1656056805'
        },
        {
          username: 'rhastingsat',
          password: bcrypt.hashSync('jlWFRqT8wpXC', 10),
          email: 'rhastingsat@rediff.com',
          first_name: 'Rock',
          last_name: 'Hastings',
          phone: '2028117201'
        },
        {
          username: 'afairfootau',
          password: bcrypt.hashSync('K9Z0gX4xz', 10),
          email: 'afairfootau@bbb.org',
          first_name: 'Alaine',
          last_name: 'Fairfoot',
          phone: '9446982124'
        },
        {
          username: 'cmumbeyav',
          password: bcrypt.hashSync('CqO0dAH', 10),
          email: 'cmumbeyav@scientificamerican.com',
          first_name: 'Colly',
          last_name: 'Mumbey',
          phone: '2298630363'
        },
        {
          username: 'scrumbyaw',
          password: bcrypt.hashSync('Q3MvcTwf06G9', 10),
          email: 'scrumbyaw@adobe.com',
          first_name: 'Sayre',
          last_name: 'Crumby',
          phone: '9226757681'
        },
        {
          username: 'reglintonax',
          password: bcrypt.hashSync('akY04dbt3L', 10),
          email: 'reglintonax@uol.com.br',
          first_name: 'Rand',
          last_name: 'Eglinton',
          phone: '5995672842'
        },
        {
          username: 'cbehanay',
          password: bcrypt.hashSync('mVbqyeW2', 10),
          email: 'cbehanay@wix.com',
          first_name: 'Christie',
          last_name: 'Behan',
          phone: '1801673107'
        },
        {
          username: 'kfrieraz',
          password: bcrypt.hashSync('lDUWS1DC2', 10),
          email: 'kfrieraz@xrea.com',
          first_name: 'Karol',
          last_name: 'Frier',
          phone: '4909268749'
        },
        {
          username: 'ldarnodyb0',
          password: bcrypt.hashSync('YsxtZ6Wq', 10),
          email: 'ldarnodyb0@hostgator.com',
          first_name: 'Lynsey',
          last_name: 'Darnody',
          phone: '9222648851'
        },
        {
          username: 'mmithonb1',
          password: bcrypt.hashSync('qFqvDc2wx', 10),
          email: 'mmithonb1@constantcontact.com',
          first_name: 'Maddy',
          last_name: 'Mithon',
          phone: '1815585875'
        },
        {
          username: 'hrumensb2',
          password: bcrypt.hashSync('rgGcAA4rWR1t', 10),
          email: 'hrumensb2@cisco.com',
          first_name: 'Hadria',
          last_name: 'Rumens',
          phone: '4625019953'
        },
        {
          username: 'yhardisonb3',
          password: bcrypt.hashSync('AeqnX2P4J32', 10),
          email: 'yhardisonb3@archive.org',
          first_name: 'Yves',
          last_name: 'Hardison',
          phone: '4221163410'
        },
        {
          username: 'jlambertsb4',
          password: bcrypt.hashSync('vVszu8Vl8Y', 10),
          email: 'jlambertsb4@163.com',
          first_name: 'Jessi',
          last_name: 'Lamberts',
          phone: '5968299582'
        },
        {
          username: 'bkondratenyab5',
          password: bcrypt.hashSync('tKLQZWXBcHRT', 10),
          email: 'bkondratenyab5@weibo.com',
          first_name: 'Bartholemy',
          last_name: 'Kondratenya',
          phone: '9655089709'
        },
        {
          username: 'mlathamb6',
          password: bcrypt.hashSync('lAsmTyBy4', 10),
          email: 'mlathamb6@latimes.com',
          first_name: 'Myrtle',
          last_name: 'Latham',
          phone: '6106857394'
        },
        {
          username: 'jbearfootb7',
          password: bcrypt.hashSync('OI6xr6vzmgZf', 10),
          email: 'jbearfootb7@i2i.jp',
          first_name: 'Juliane',
          last_name: 'Bearfoot',
          phone: '6221298751'
        },
        {
          username: 'mjacombsb8',
          password: bcrypt.hashSync('T3F0KDnn2FKF', 10),
          email: 'mjacombsb8@nature.com',
          first_name: 'Maire',
          last_name: 'Jacombs',
          phone: '4548979596'
        },
        {
          username: 'ddunsmoreb9',
          password: bcrypt.hashSync('frRGpBl', 10),
          email: 'ddunsmoreb9@guardian.co.uk',
          first_name: 'Dwain',
          last_name: 'Dunsmore',
          phone: '1382572610'
        },
        {
          username: 'ilivenba',
          password: bcrypt.hashSync('wMuYVI0pUvg', 10),
          email: 'ilivenba@reddit.com',
          first_name: 'Idette',
          last_name: 'Liven',
          phone: '1182176324'
        },
        {
          username: 'mmalamorebb',
          password: bcrypt.hashSync('4sL7aXz818vr', 10),
          email: 'mmalamorebb@hc360.com',
          first_name: 'Mahmoud',
          last_name: 'Malamore',
          phone: '5089899980'
        },
        {
          username: 'edwyerbc',
          password: bcrypt.hashSync('o0i2K6bq', 10),
          email: 'edwyerbc@xinhuanet.com',
          first_name: 'Enrique',
          last_name: 'Dwyer',
          phone: '1055358675'
        },
        {
          username: 'vbendikbd',
          password: bcrypt.hashSync('LO7oNZUI7PY', 10),
          email: 'vbendikbd@accuweather.com',
          first_name: 'Viola',
          last_name: 'Bendik',
          phone: '9645459370'
        },
        {
          username: 'tlortzbe',
          password: bcrypt.hashSync('qjlxS1kHh', 10),
          email: 'tlortzbe@free.fr',
          first_name: 'Tomaso',
          last_name: 'Lortz',
          phone: '7028615505'
        },
        {
          username: 'ocorkelbf',
          password: bcrypt.hashSync('1EZgfeOU35', 10),
          email: 'ocorkelbf@mit.edu',
          first_name: 'Odie',
          last_name: 'Corkel',
          phone: '6207154528'
        },
        {
          username: 'aknapmanbg',
          password: bcrypt.hashSync('bEanljteZW', 10),
          email: 'aknapmanbg@spiegel.de',
          first_name: 'Amye',
          last_name: 'Knapman',
          phone: '8542684781'
        },
        {
          username: 'mgossingtonbh',
          password: bcrypt.hashSync('5faWVzlRkXm', 10),
          email: 'mgossingtonbh@ustream.tv',
          first_name: 'Martguerita',
          last_name: 'Gossington',
          phone: '3819820843'
        },
        {
          username: 'emcallanbi',
          password: bcrypt.hashSync('66yfJ1larIrp', 10),
          email: 'emcallanbi@google.co.jp',
          first_name: 'Emmerich',
          last_name: 'McAllan',
          phone: '7823246122'
        },
        {
          username: 'mwillsherebj',
          password: bcrypt.hashSync('CMkzXK9JFYQR', 10),
          email: 'mwillsherebj@umich.edu',
          first_name: 'Mackenzie',
          last_name: 'Willshere',
          phone: '5048018443'
        },
        {
          username: 'skuhlbk',
          password: bcrypt.hashSync('02eQkHV1Mc8H', 10),
          email: 'skuhlbk@netlog.com',
          first_name: 'Sergeant',
          last_name: 'Kuhl',
          phone: '4079974170'
        },
        {
          username: 'rgrottybl',
          password: bcrypt.hashSync('M2ZydVtsR', 10),
          email: 'rgrottybl@cnet.com',
          first_name: 'Rice',
          last_name: 'Grotty',
          phone: '5265570429'
        },
        {
          username: 'gpaladinobm',
          password: bcrypt.hashSync('ryq52vgDGpxq', 10),
          email: 'gpaladinobm@google.co.jp',
          first_name: 'Garwin',
          last_name: 'Paladino',
          phone: '4449917760'
        },
        {
          username: 'gdumberellbn',
          password: bcrypt.hashSync('zkZTgC6pwbU', 10),
          email: 'gdumberellbn@blinklist.com',
          first_name: 'George',
          last_name: 'Dumberell',
          phone: '7961320998'
        },
        {
          username: 'tkettlebo',
          password: bcrypt.hashSync('PtvLe1f', 10),
          email: 'tkettlebo@hao123.com',
          first_name: 'Taylor',
          last_name: 'Kettle',
          phone: '1531524767'
        },
        {
          username: 'mmcmechanbp',
          password: bcrypt.hashSync('A5bidOwHCi9', 10),
          email: 'mmcmechanbp@parallels.com',
          first_name: 'Maryann',
          last_name: 'Mc Mechan',
          phone: '9397609358'
        },
        {
          username: 'zhrinishinbq',
          password: bcrypt.hashSync('pYXC2GUY', 10),
          email: 'zhrinishinbq@stanford.edu',
          first_name: 'Zabrina',
          last_name: 'Hrinishin',
          phone: '7816944059'
        },
        {
          username: 'adockrillbr',
          password: bcrypt.hashSync('QFKJ109wiVlL', 10),
          email: 'adockrillbr@symantec.com',
          first_name: 'Asher',
          last_name: 'Dockrill',
          phone: '1251286382'
        },
        {
          username: 'fgeddesbs',
          password: bcrypt.hashSync('91PpehJz6VVx', 10),
          email: 'fgeddesbs@ebay.co.uk',
          first_name: 'Florenza',
          last_name: 'Geddes',
          phone: '9641169149'
        },
        {
          username: 'ledwinsonbt',
          password: bcrypt.hashSync('Bco0cbYkvK', 10),
          email: 'ledwinsonbt@rambler.ru',
          first_name: 'Licha',
          last_name: 'Edwinson',
          phone: '9999152077'
        },
        {
          username: 'loduanebu',
          password: bcrypt.hashSync('Pe3IHHLk8', 10),
          email: 'loduanebu@upenn.edu',
          first_name: 'Leisha',
          last_name: "O'Duane",
          phone: '2694769918'
        },
        {
          username: 'ehemphillbv',
          password: bcrypt.hashSync('z9ZXmBE', 10),
          email: 'ehemphillbv@umn.edu',
          first_name: 'Elena',
          last_name: 'Hemphill',
          phone: '7814843744'
        },
        {
          username: 'cpetriellobw',
          password: bcrypt.hashSync('7HfjLl', 10),
          email: 'cpetriellobw@odnoklassniki.ru',
          first_name: 'Charlene',
          last_name: 'Petriello',
          phone: '3729079908'
        },
        {
          username: 'acanobx',
          password: bcrypt.hashSync('aK8GQ6L1vyH', 10),
          email: 'acanobx@go.com',
          first_name: 'Angy',
          last_name: 'Cano',
          phone: '1002910098'
        },
        {
          username: 'cmunehayby',
          password: bcrypt.hashSync('LtT5337hY2U', 10),
          email: 'cmunehayby@cloudflare.com',
          first_name: 'Clari',
          last_name: 'Munehay',
          phone: '3401876902'
        },
        {
          username: 'asallengerbz',
          password: bcrypt.hashSync('1RGmm7Bl', 10),
          email: 'asallengerbz@nasa.gov',
          first_name: 'Andrey',
          last_name: 'Sallenger',
          phone: '8988802825'
        },
        {
          username: 'akilaleac0',
          password: bcrypt.hashSync('MxIp3o', 10),
          email: 'akilaleac0@auda.org.au',
          first_name: 'Ashley',
          last_name: 'Kilalea',
          phone: '8763523220'
        },
        {
          username: 'crockliffec1',
          password: bcrypt.hashSync('nl9sXjE4Q', 10),
          email: 'crockliffec1@dot.gov',
          first_name: 'Caroline',
          last_name: 'Rockliffe',
          phone: '5774348228'
        },
        {
          username: 'tjaxonc2',
          password: bcrypt.hashSync('lkv1PjS', 10),
          email: 'tjaxonc2@umich.edu',
          first_name: 'Tymon',
          last_name: 'Jaxon',
          phone: '3176067233'
        },
        {
          username: 'sarnaldoc3',
          password: bcrypt.hashSync('Un2FhXBDz', 10),
          email: 'sarnaldoc3@cornell.edu',
          first_name: 'Sal',
          last_name: 'Arnaldo',
          phone: '7286780195'
        },
        {
          username: 'rolexac4',
          password: bcrypt.hashSync('E1zB7h', 10),
          email: 'rolexac4@rediff.com',
          first_name: 'Ruth',
          last_name: 'Olexa',
          phone: '2924970421'
        },
        {
          username: 'gchristofec5',
          password: bcrypt.hashSync('9g15evLFjk', 10),
          email: 'gchristofec5@usnews.com',
          first_name: 'Goldina',
          last_name: 'Christofe',
          phone: '4677829162'
        },
        {
          username: 'tmarielc6',
          password: bcrypt.hashSync('lQS18xF', 10),
          email: 'tmarielc6@smh.com.au',
          first_name: 'Trescha',
          last_name: 'Mariel',
          phone: '4901053434'
        },
        {
          username: 'lhimpsonc7',
          password: bcrypt.hashSync('9wQ81F', 10),
          email: 'lhimpsonc7@wix.com',
          first_name: 'Lexie',
          last_name: 'Himpson',
          phone: '1622242460'
        },
        {
          username: 'nilyuninc8',
          password: bcrypt.hashSync('pO1LFoLo', 10),
          email: 'nilyuninc8@npr.org',
          first_name: 'Nataline',
          last_name: 'Ilyunin',
          phone: '7141901140'
        },
        {
          username: 'lseivwrightc9',
          password: bcrypt.hashSync('wAvDLg', 10),
          email: 'lseivwrightc9@blogspot.com',
          first_name: 'Lorri',
          last_name: 'Seivwright',
          phone: '8921197127'
        },
        {
          username: 'lderuggieroca',
          password: bcrypt.hashSync('ee9eXS', 10),
          email: 'lderuggieroca@china.com.cn',
          first_name: 'Lenard',
          last_name: 'De Ruggiero',
          phone: '9179304054'
        },
        {
          username: 'amasdincb',
          password: bcrypt.hashSync('Rh3WhmQ3', 10),
          email: 'amasdincb@qq.com',
          first_name: 'Aymer',
          last_name: 'Masdin',
          phone: '4054291432'
        },
        {
          username: 'fbottinellicc',
          password: bcrypt.hashSync('RrMyEWTob', 10),
          email: 'fbottinellicc@vimeo.com',
          first_name: 'Faydra',
          last_name: 'Bottinelli',
          phone: '8148813244'
        },
        {
          username: 'wzupacd',
          password: bcrypt.hashSync('cjozcIkN', 10),
          email: 'wzupacd@imdb.com',
          first_name: 'Winnifred',
          last_name: 'Zupa',
          phone: '9931878077'
        },
        {
          username: 'iantatce',
          password: bcrypt.hashSync('ks0uDIbbTF9', 10),
          email: 'iantatce@wufoo.com',
          first_name: 'Ivy',
          last_name: 'Antat',
          phone: '4237594049'
        },
        {
          username: 'echristophlecf',
          password: bcrypt.hashSync('oKlF0QH3', 10),
          email: 'echristophlecf@unblog.fr',
          first_name: 'Emmott',
          last_name: 'Christophle',
          phone: '4683638249'
        },
        {
          username: 'epeachmentcg',
          password: bcrypt.hashSync('JrQFQy5', 10),
          email: 'epeachmentcg@bluehost.com',
          first_name: 'Enrichetta',
          last_name: 'Peachment',
          phone: '4976278209'
        },
        {
          username: 'cfreckeltonch',
          password: bcrypt.hashSync('jPCYqNP', 10),
          email: 'cfreckeltonch@meetup.com',
          first_name: 'Clara',
          last_name: 'Freckelton',
          phone: '6234999981'
        },
        {
          username: 'skleanthousci',
          password: bcrypt.hashSync('q40K8aUql', 10),
          email: 'skleanthousci@dot.gov',
          first_name: 'Stesha',
          last_name: 'Kleanthous',
          phone: '1273272688'
        },
        {
          username: 'gcolbroncj',
          password: bcrypt.hashSync('6WUj7qTw', 10),
          email: 'gcolbroncj@cnn.com',
          first_name: 'Godfrey',
          last_name: 'Colbron',
          phone: '6614411215'
        },
        {
          username: 'rrudolfck',
          password: bcrypt.hashSync('u7rHXmK', 10),
          email: 'rrudolfck@wunderground.com',
          first_name: 'Randy',
          last_name: 'Rudolf',
          phone: '2207359570'
        },
        {
          username: 'hgisckencl',
          password: bcrypt.hashSync('HKgKAcrlD', 10),
          email: 'hgisckencl@plala.or.jp',
          first_name: 'Holden',
          last_name: 'Giscken',
          phone: '1906616132'
        },
        {
          username: 'cwilmottcm',
          password: bcrypt.hashSync('bNaw5qSpDBiB', 10),
          email: 'cwilmottcm@nytimes.com',
          first_name: 'Carlie',
          last_name: 'Wilmott',
          phone: '4454161929'
        },
        {
          username: 'dcuretoncn',
          password: bcrypt.hashSync('O3knziTkPu', 10),
          email: 'dcuretoncn@yolasite.com',
          first_name: 'Delora',
          last_name: 'Cureton',
          phone: '2508124657'
        },
        {
          username: 'smohanco',
          password: bcrypt.hashSync('nOE03yVf', 10),
          email: 'smohanco@ask.com',
          first_name: 'Silvester',
          last_name: 'Mohan',
          phone: '2346851416'
        },
        {
          username: 'csneathcp',
          password: bcrypt.hashSync('Msk5lZr', 10),
          email: 'csneathcp@trellian.com',
          first_name: 'Celestia',
          last_name: 'Sneath',
          phone: '2229704621'
        },
        {
          username: 'dclerkcq',
          password: bcrypt.hashSync('kz5VWyj', 10),
          email: 'dclerkcq@dot.gov',
          first_name: 'Demeter',
          last_name: 'Clerk',
          phone: '3945360312'
        },
        {
          username: 'boldmeadowcr',
          password: bcrypt.hashSync('pjjgrp9DQH', 10),
          email: 'boldmeadowcr@kickstarter.com',
          first_name: 'Brant',
          last_name: 'Oldmeadow',
          phone: '4515981922'
        },
        {
          username: 'ttiddcs',
          password: bcrypt.hashSync('1IAJxYYZ3d', 10),
          email: 'ttiddcs@moonfruit.com',
          first_name: 'Tina',
          last_name: 'Tidd',
          phone: '6498533205'
        },
        {
          username: 'dpoylect',
          password: bcrypt.hashSync('dbWLlL73n', 10),
          email: 'dpoylect@un.org',
          first_name: 'Dode',
          last_name: 'Poyle',
          phone: '5177808669'
        },
        {
          username: 'cpeakmancu',
          password: bcrypt.hashSync('EohKS2bs', 10),
          email: 'cpeakmancu@scientificamerican.com',
          first_name: 'Chadwick',
          last_name: 'Peakman',
          phone: '6146676994'
        },
        {
          username: 'bjasiakcv',
          password: bcrypt.hashSync('kZ5poWROjF', 10),
          email: 'bjasiakcv@twitter.com',
          first_name: 'Bogart',
          last_name: 'Jasiak',
          phone: '4048378609'
        },
        {
          username: 'mverdycw',
          password: bcrypt.hashSync('ksUc7P', 10),
          email: 'mverdycw@home.pl',
          first_name: 'Monty',
          last_name: 'Verdy',
          phone: '8718714148'
        },
        {
          username: 'kmatecx',
          password: bcrypt.hashSync('1HnWxjPtAnQ', 10),
          email: 'kmatecx@imageshack.us',
          first_name: 'Kinny',
          last_name: 'Mate',
          phone: '6764677593'
        },
        {
          username: 'sgiannotticy',
          password: bcrypt.hashSync('5rwj1c5sVot', 10),
          email: 'sgiannotticy@nature.com',
          first_name: 'Shalom',
          last_name: 'Giannotti',
          phone: '9817165024'
        },
        {
          username: 'kspilsburycz',
          password: bcrypt.hashSync('FzJCLzZrAgDc', 10),
          email: 'kspilsburycz@unicef.org',
          first_name: 'Karalee',
          last_name: 'Spilsbury',
          phone: '4649461796'
        },
        {
          username: 'mwogand0',
          password: bcrypt.hashSync('ZhWunMv5Jjx', 10),
          email: 'mwogand0@fastcompany.com',
          first_name: 'Margette',
          last_name: 'Wogan',
          phone: '3002806334'
        },
        {
          username: 'cdowsed1',
          password: bcrypt.hashSync('9fuD2ebDU', 10),
          email: 'cdowsed1@t.co',
          first_name: 'Candie',
          last_name: 'Dowse',
          phone: '8976923338'
        },
        {
          username: 'elered2',
          password: bcrypt.hashSync('TfdcXBoEtshq', 10),
          email: 'elered2@google.co.jp',
          first_name: 'Eolanda',
          last_name: 'Lere',
          phone: '4269506036'
        },
        {
          username: 'jellsburyd3',
          password: bcrypt.hashSync('F15y3ruDg', 10),
          email: 'jellsburyd3@dmoz.org',
          first_name: 'Jeanelle',
          last_name: 'Ellsbury',
          phone: '2183412199'
        },
        {
          username: 'lmckeaneyd4',
          password: bcrypt.hashSync('mM174XupXn', 10),
          email: 'lmckeaneyd4@addtoany.com',
          first_name: 'Lily',
          last_name: 'McKeaney',
          phone: '1282617416'
        },
        {
          username: 'tolerenshawd5',
          password: bcrypt.hashSync('vh1ig8MH', 10),
          email: 'tolerenshawd5@nifty.com',
          first_name: 'Thurston',
          last_name: 'Olerenshaw',
          phone: '7603295690'
        },
        {
          username: 'ldrohand6',
          password: bcrypt.hashSync('DHHQoNHG', 10),
          email: 'ldrohand6@flickr.com',
          first_name: 'Latashia',
          last_name: 'Drohan',
          phone: '5673711634'
        },
        {
          username: 'braysond7',
          password: bcrypt.hashSync('UxMd95Kt', 10),
          email: 'braysond7@rambler.ru',
          first_name: 'Brodie',
          last_name: 'Rayson',
          phone: '2038958168'
        },
        {
          username: 'lruaned8',
          password: bcrypt.hashSync('3U2amJ', 10),
          email: 'lruaned8@apache.org',
          first_name: 'Lemmie',
          last_name: 'Ruane',
          phone: '2102575225'
        },
        {
          username: 'dibotsond9',
          password: bcrypt.hashSync('AJvIScpOQ', 10),
          email: 'dibotsond9@google.ca',
          first_name: 'Dacia',
          last_name: 'Ibotson',
          phone: '3439975369'
        },
        {
          username: 'hsomerfieldda',
          password: bcrypt.hashSync('PvYo2scX5', 10),
          email: 'hsomerfieldda@squidoo.com',
          first_name: 'Henrieta',
          last_name: 'Somerfield',
          phone: '5715047066'
        },
        {
          username: 'rchindb',
          password: bcrypt.hashSync('y3Db4ChWUoeP', 10),
          email: 'rchindb@theguardian.com',
          first_name: 'Rutger',
          last_name: 'Chin',
          phone: '3776475156'
        },
        {
          username: 'cferrellidc',
          password: bcrypt.hashSync('01qA5KLBuKz', 10),
          email: 'cferrellidc@jugem.jp',
          first_name: 'Chip',
          last_name: 'Ferrelli',
          phone: '1405759961'
        },
        {
          username: 'tfingletondd',
          password: bcrypt.hashSync('ooVHAa6sAhHf', 10),
          email: 'tfingletondd@seesaa.net',
          first_name: 'Tallie',
          last_name: 'Fingleton',
          phone: '2388463458'
        },
        {
          username: 'fdebrickde',
          password: bcrypt.hashSync('QZGyio', 10),
          email: 'fdebrickde@pen.io',
          first_name: 'Felisha',
          last_name: 'Debrick',
          phone: '5359927722'
        },
        {
          username: 'saimabledf',
          password: bcrypt.hashSync('V4PLeQ', 10),
          email: 'saimabledf@bluehost.com',
          first_name: 'Skell',
          last_name: 'Aimable',
          phone: '1481433510'
        },
        {
          username: 'dluchettidg',
          password: bcrypt.hashSync('DVONJtSkzl2', 10),
          email: 'dluchettidg@bigcartel.com',
          first_name: 'Dean',
          last_name: 'Luchetti',
          phone: '8592368083'
        },
        {
          username: 'wchiplendh',
          password: bcrypt.hashSync('t8cIb9', 10),
          email: 'wchiplendh@blinklist.com',
          first_name: 'Wynny',
          last_name: 'Chiplen',
          phone: '3926220853'
        },
        {
          username: 'bbardeydi',
          password: bcrypt.hashSync('x74G7Pr7su', 10),
          email: 'bbardeydi@youtube.com',
          first_name: 'Boone',
          last_name: 'Bardey',
          phone: '7534415485'
        },
        {
          username: 'echreedj',
          password: bcrypt.hashSync('s8cRhR7Om7Pr', 10),
          email: 'echreedj@zdnet.com',
          first_name: 'Emerson',
          last_name: 'Chree',
          phone: '2102950109'
        },
        {
          username: 'mpickavancedk',
          password: bcrypt.hashSync('FxScvnkm', 10),
          email: 'mpickavancedk@hhs.gov',
          first_name: 'Marketa',
          last_name: 'Pickavance',
          phone: '4629450732'
        },
        {
          username: 'mrandlesomedl',
          password: bcrypt.hashSync('EgRKYsmlr0Ug', 10),
          email: 'mrandlesomedl@yellowpages.com',
          first_name: 'Meier',
          last_name: 'Randlesome',
          phone: '2058014845'
        },
        {
          username: 'gblackburndm',
          password: bcrypt.hashSync('mEL7kZ', 10),
          email: 'gblackburndm@weather.com',
          first_name: 'Gweneth',
          last_name: 'Blackburn',
          phone: '6668833234'
        },
        {
          username: 'rchrishopdn',
          password: bcrypt.hashSync('M9TLZXND5B', 10),
          email: 'rchrishopdn@hatena.ne.jp',
          first_name: 'Rafaela',
          last_name: 'Chrishop',
          phone: '1784043946'
        },
        {
          username: 'prountreedo',
          password: bcrypt.hashSync('27QT8DyYHq', 10),
          email: 'prountreedo@army.mil',
          first_name: 'Powell',
          last_name: 'Rountree',
          phone: '6269792662'
        },
        {
          username: 'echallengerdp',
          password: bcrypt.hashSync('B5uu6lnw6N6l', 10),
          email: 'echallengerdp@arstechnica.com',
          first_name: 'Emanuele',
          last_name: 'Challenger',
          phone: '1277362124'
        },
        {
          username: 'sdombdq',
          password: bcrypt.hashSync('0CuWulq', 10),
          email: 'sdombdq@privacy.gov.au',
          first_name: 'Sim',
          last_name: 'Domb',
          phone: '2126476224'
        },
        {
          username: 'awashingtondr',
          password: bcrypt.hashSync('Q4Vlndb8s', 10),
          email: 'awashingtondr@smh.com.au',
          first_name: 'Allen',
          last_name: 'Washington',
          phone: '8417255071'
        },
        {
          username: 'rcallisds',
          password: bcrypt.hashSync('kxfcwfv', 10),
          email: 'rcallisds@yelp.com',
          first_name: 'Rikki',
          last_name: 'Callis',
          phone: '4518376260'
        },
        {
          username: 'bbartelsellisdt',
          password: bcrypt.hashSync('RXUp7eI', 10),
          email: 'bbartelsellisdt@google.co.jp',
          first_name: 'Bernardo',
          last_name: 'Bartels-Ellis',
          phone: '9877548746'
        },
        {
          username: 'jladddu',
          password: bcrypt.hashSync('hwiVhLMRt', 10),
          email: 'jladddu@psu.edu',
          first_name: 'Joel',
          last_name: 'Ladd',
          phone: '6887655927'
        },
        {
          username: 'hbofielddv',
          password: bcrypt.hashSync('xWVOVJIscUho', 10),
          email: 'hbofielddv@foxnews.com',
          first_name: 'Heddie',
          last_name: 'Bofield',
          phone: '9918673503'
        }
      ]);
    });
};
