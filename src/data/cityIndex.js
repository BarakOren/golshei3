// The city pages under /height-work, in the hub page's order. Each page's text lives in
// src/data/cities/<id>.js and is loaded only on that page (see cityContent.js).
// `photo` is the service in services.jsx whose photo and share image the page uses.
export const regions = [
  { id: 'gush-dan', title: 'תל אביב וגוש דן' },
  { id: 'sharon', title: 'השרון' },
  { id: 'shfela', title: 'השפלה והדרום' },
  { id: 'east', title: 'ראש העין, אלעד והשומרון' },
]

export const cityList = [
  { id: 'tel-aviv', name: 'תל אביב-יפו', region: 'gush-dan', photo: 'glass-replacement', nearby: ['ramat-gan', 'givatayim', 'bat-yam', 'holon', 'bnei-brak'] },
  { id: 'ramat-gan', name: 'רמת גן', region: 'gush-dan', photo: 'hpl-cladding', nearby: ['givatayim', 'tel-aviv', 'bnei-brak', 'givat-shmuel', 'petah-tikva'] },
  { id: 'givatayim', name: 'גבעתיים', region: 'gush-dan', photo: 'building-renovation', nearby: ['ramat-gan', 'tel-aviv', 'bnei-brak', 'holon'] },
  { id: 'bnei-brak', name: 'בני ברק', region: 'gush-dan', photo: 'concrete-restoration', nearby: ['ramat-gan', 'givat-shmuel', 'petah-tikva', 'givatayim', 'tel-aviv'] },
  { id: 'holon', name: 'חולון', region: 'gush-dan', photo: 'tile-replacement', nearby: ['bat-yam', 'tel-aviv', 'rishon-lezion', 'or-yehuda', 'givatayim'] },
  { id: 'bat-yam', name: 'בת ים', region: 'gush-dan', photo: 'concrete-restoration', nearby: ['holon', 'tel-aviv', 'rishon-lezion', 'givatayim'] },
  { id: 'petah-tikva', name: 'פתח תקווה', region: 'gush-dan', photo: 'building-renovation', nearby: ['givat-shmuel', 'bnei-brak', 'ganei-tikva', 'kiryat-ono', 'rosh-haayin'] },
  { id: 'givat-shmuel', name: 'גבעת שמואל', region: 'gush-dan', photo: 'glass-replacement', nearby: ['bnei-brak', 'petah-tikva', 'ramat-gan', 'kiryat-ono'] },
  { id: 'kiryat-ono', name: 'קריית אונו', region: 'gush-dan', photo: 'waterproofing', nearby: ['ganei-tikva', 'givat-shmuel', 'yehud', 'or-yehuda', 'petah-tikva'] },
  { id: 'ganei-tikva', name: 'גני תקווה', region: 'gush-dan', photo: 'roof-wall-sealing', nearby: ['kiryat-ono', 'petah-tikva', 'yehud', 'givat-shmuel'] },
  { id: 'or-yehuda', name: 'אור יהודה', region: 'gush-dan', photo: 'stone-replacement', nearby: ['yehud', 'kiryat-ono', 'ramat-gan', 'ganei-tikva'] },
  { id: 'yehud', name: 'יהוד-מונוסון', region: 'gush-dan', photo: 'stone-fixing', nearby: ['or-yehuda', 'kiryat-ono', 'ganei-tikva', 'petah-tikva'] },
  { id: 'herzliya', name: 'הרצליה', region: 'sharon', photo: 'aluminum-work', nearby: ['ramat-hasharon', 'raanana', 'hod-hasharon', 'tel-aviv'] },
  { id: 'ramat-hasharon', name: 'רמת השרון', region: 'sharon', photo: 'roof-wall-sealing', nearby: ['herzliya', 'tel-aviv', 'hod-hasharon', 'petah-tikva', 'raanana'] },
  { id: 'raanana', name: 'רעננה', region: 'sharon', photo: 'stone-replacement', nearby: ['kfar-saba', 'herzliya', 'hod-hasharon', 'ramat-hasharon'] },
  { id: 'kfar-saba', name: 'כפר סבא', region: 'sharon', photo: 'tile-replacement', nearby: ['raanana', 'hod-hasharon', 'kfar-yona', 'rosh-haayin'] },
  { id: 'hod-hasharon', name: 'הוד השרון', region: 'sharon', photo: 'waterproofing', nearby: ['kfar-saba', 'raanana', 'ramat-hasharon', 'petah-tikva'] },
  { id: 'netanya', name: 'נתניה', region: 'sharon', photo: 'concrete-restoration', nearby: ['kfar-yona', 'raanana', 'herzliya', 'kfar-saba'] },
  { id: 'kfar-yona', name: 'כפר יונה', region: 'sharon', photo: 'building-renovation', nearby: ['netanya', 'kfar-saba', 'raanana'] },
  { id: 'rishon-lezion', name: 'ראשון לציון', region: 'shfela', photo: 'tile-replacement', nearby: ['bat-yam', 'holon', 'ness-ziona', 'rehovot', 'beer-yaakov'] },
  { id: 'rehovot', name: 'רחובות', region: 'shfela', photo: 'stone-fixing', nearby: ['ness-ziona', 'yavne', 'ramla', 'beer-yaakov', 'rishon-lezion'] },
  { id: 'ness-ziona', name: 'נס ציונה', region: 'shfela', photo: 'hpl-cladding', nearby: ['rehovot', 'rishon-lezion', 'beer-yaakov', 'yavne'] },
  { id: 'yavne', name: 'יבנה', region: 'shfela', photo: 'roof-wall-sealing', nearby: ['rehovot', 'ashdod', 'ness-ziona', 'rishon-lezion'] },
  { id: 'beer-yaakov', name: 'באר יעקב', region: 'shfela', photo: 'aluminum-work', nearby: ['ness-ziona', 'rishon-lezion', 'ramla', 'rehovot'] },
  { id: 'ramla', name: 'רמלה', region: 'shfela', photo: 'building-renovation', nearby: ['beer-yaakov', 'rehovot', 'rishon-lezion', 'ness-ziona'] },
  { id: 'ashdod', name: 'אשדוד', region: 'shfela', photo: 'concrete-restoration', nearby: ['yavne', 'kiryat-malakhi', 'rehovot'] },
  { id: 'kiryat-malakhi', name: 'קריית מלאכי', region: 'shfela', photo: 'waterproofing', nearby: ['ashdod', 'yavne', 'rehovot'] },
  { id: 'rosh-haayin', name: 'ראש העין', region: 'east', photo: 'stone-replacement', nearby: ['petah-tikva', 'elad', 'kfar-saba', 'hod-hasharon'] },
  { id: 'elad', name: 'אלעד', region: 'east', photo: 'stone-fixing', nearby: ['rosh-haayin', 'petah-tikva', 'yehud'] },
  { id: 'ariel', name: 'אריאל', region: 'east', photo: 'waterproofing', nearby: ['rosh-haayin', 'elad', 'kfar-saba'] },
]

export const cityById = Object.fromEntries(cityList.map((c) => [c.id, c]))

// "in <city>": בבת ים, באשדוד, בתל אביב-יפו
export const inCity = (city) => `ב${city.name}`
