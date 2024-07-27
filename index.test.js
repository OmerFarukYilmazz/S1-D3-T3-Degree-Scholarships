const calTuition = require('./index.js');

describe('Okul ücreti hesaplama testleri', () => {
  test("İlk 3'e giren öğrenci için ücretin 0 olup olmadığını kontrol et", () => {
    expect(calTuition(['Emre', 'Erdem', 'Hatice'], 'Emre')).toBe(0);
  });

  test('4. ile 6. sıradaki öğrenci için ücretin %50 indirimli olup olmadığını kontrol et', () => {
    expect(
      calTuition(['Emre', 'Erdem', 'Hatice', 'Fatih', 'Ayşe', 'Selen'], 'Fatih')
    ).toBe(75000);
  });

  test('7. ile 10. sıradaki öğrenci için ücretin %30 indirimli olup olmadığını kontrol et', () => {
    expect(
      calTuition(
        [
          'Emre',
          'Erdem',
          'Hatice',
          'Fatih',
          'Ayşe',
          'Selen',
          'Alp',
          'Mehmet',
          'Turan',
          'Melis',
        ],
        'Alp'
      )
    ).toBe(105000);
  });

  test('Sıralamada 10. sıradan sonra gelen veya olmayan öğrenci için tam ücretin alınıp alınmadığını kontrol et', () => {
    expect(
      calTuition(
        [
          'Emre',
          'Erdem',
          'Hatice',
          'Fatih',
          'Ayşe',
          'Selen',
          'Alp',
          'Mehmet',
          'Turan',
          'Melis',
        ],
        'Gamze'
      )
    ).toBe(150000);
  });

  test('Sıralamada olmayan öğrenci için tam ücretin alınıp alınmadığını kontrol et', () => {
    expect(
      calTuition(
        [
          'Emre',
          'Erdem',
          'Hatice',
          'Fatih',
          'Ayşe',
          'Selen',
          'Alp',
          'Mehmet',
          'Turan',
          'Melis',
        ],
        'Kazım'
      )
    ).toBe(150000);
  });

  // Ek testler
  test('Sıralamada ilk 3 arasında olup bedava okuyan öğrenci kontrolü', () => {
    expect(calTuition(['Emre', 'Erdem', 'Hatice', 'Fatih'], 'Hatice')).toBe(0);
  });

  test('Sıralamada 4. ile 6. arasında olup %50 indirimli ödeyen öğrenci kontrolü', () => {
    expect(
      calTuition(['Emre', 'Erdem', 'Hatice', 'Fatih', 'Ayşe', 'Selen'], 'Ayşe')
    ).toBe(75000);
  });

  test('Sıralamada 7. ile 10. arasında olup %30 indirimli ödeyen öğrenci kontrolü', () => {
    expect(
      calTuition(
        [
          'Emre',
          'Erdem',
          'Hatice',
          'Fatih',
          'Ayşe',
          'Selen',
          'Alp',
          'Mehmet',
          'Turan',
          'Melis',
        ],
        'Mehmet'
      )
    ).toBe(105000);
  });
});