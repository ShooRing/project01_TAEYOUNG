const data = [
    { id: 1, name: '문의', title: '질문합니다', date: '2024-04-22', check: '456' },
    { id: 2, name: '문의', title: '질문합니다', date: '2024-04-22', check: '476' },
    { id: 3, name: '문의', title: '질문이용', date: '2024-04-22', check: '592' },
    { id: 4, name: '문의', title: '질문합니다', date: '2024-04-22', check: '53' },
    { id: 5, name: '문의', title: '질문합니다', date: '2024-04-22', check: '52' },
    { id: 6, name: '문의', title: '질문합니다', date: '2024-04-22', check: '592' },
    { id: 7, name: '문의', title: '질문있습니다', date: '2024-04-22', check: '5' },
    { id: 8, name: '문의', title: '질문합니다', date: '2024-04-22', check: '567' },
    { id: 9, name: '문의', title: '질문합니다', date: '2024-04-22', check: '92' },
    { id: 10, name: '문의', title: '질문합니다', date: '2024-04-22', check: '123' },
    { id: 11, name: '문의', title: '질문합니다', date: '2024-04-22', check: '592' },
    { id: 12, name: '문의', title: '질문합니다', date: '2024-04-22', check: '951' },
    { id: 13, name: '문의', title: '질문', date: '2024-04-22', check: '4' },
    { id: 14, name: '문의', title: '질문합니다', date: '2024-04-22', check: '20' },
    { id: 15, name: '문의', title: '질문사항', date: '2024-04-22', check: '21' },
    { id: 16, name: '문의', title: '질문합니다', date: '2024-04-22', check: '695' },
    { id: 17, name: '문의', title: '질문합니다', date: '2024-04-22', check: '67' },
    { id: 18, name: '문의', title: '문의드립니다', date: '2024-04-22', check: '59' },
    { id: 19, name: '문의', title: '질문합니다', date: '2024-04-22', check: '537' },
    { id: 20, name: '문의', title: '질문합니다', date: '2024-04-22', check: '254' },
    { id: 21, name: '문의', title: '질문합니다', date: '2024-04-22', check: '592' },
    { id: 22, name: '문의', title: '문의드립니다', date: '2024-04-21', check: '951' },
    { id: 23, name: '문의', title: '질문합니다', date: '2024-04-21', check: '123' },
    { id: 24, name: '문의', title: '질문합니다', date: '2024-04-21', check: '57' },
    { id: 25, name: '문의', title: '질문', date: '2024-04-21', check: '52' },
    { id: 26, name: '문의', title: '질문합니다', date: '2024-04-21', check: '55' },
    { id: 27, name: '문의', title: '질문합니다', date: '2024-04-21', check: '753' },
    { id: 28, name: '문의', title: '질문합니다', date: '2024-04-21', check: '24' },
    { id: 29, name: '문의', title: '질문', date: '2024-04-21', check: '52' },
    { id: 30, name: '문의', title: '질문합니다', date: '2024-04-20', check: '92' },
    { id: 31, name: '문의', title: '질문있습니다', date: '2024-04-20', check: '66' },
    { id: 32, name: '문의', title: '질문합니다', date: '2024-04-20', check: '42' },
    { id: 33, name: '문의', title: '질문', date: '2024-04-20', check: '67' },
    { id: 34, name: '문의', title: '질문합니다', date: '2024-04-20', check: '592' },
    { id: 35, name: '문의', title: '질문합니다', date: '2024-04-19', check: '592' },
    { id: 36, name: '문의', title: '질문있습니다', date: '2024-04-19', check: '59' },
    { id: 37, name: '문의', title: '질문합니다', date: '2024-04-19', check: '592' },
    { id: 38, name: '문의', title: '질문합니다', date: '2024-04-19', check: '56' },
    { id: 39, name: '문의', title: '질문해용', date: '2024-04-19', check: '592' },
    { id: 40, name: '문의', title: '질문합니다', date: '2024-04-19', check: '359' },
    { id: 41, name: '문의', title: '질문합니다', date: '2024-04-19', check: '647' },
    { id: 42, name: '문의', title: '질문', date: '2024-04-19', check: '592' },
    { id: 43, name: '문의', title: '질문이용', date: '2024-04-19', check: '68' },
    { id: 44, name: '문의', title: '문의드립니다', date: '2024-04-19', check: '592' },
    { id: 45, name: '문의', title: '질문합니다', date: '2024-04-19', check: '52' },
    { id: 46, name: '문의', title: '질문', date: '2024-04-19', check: '62' },
    { id: 47, name: '문의', title: '질문합니다', date: '2024-04-19', check: '592' },
    { id: 48, name: '문의', title: '질문합니다', date: '2024-04-19', check: '59' },
    { id: 49, name: '문의', title: '문의드립니다', date: '2024-04-18', check: '592' },
    { id: 50, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 51, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 52, name: '문의', title: '질문', date: '2024-04-18', check: '592' },
    { id: 53, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 54, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 55, name: '문의', title: '질문있습니다', date: '2024-04-18', check: '592' },
    { id: 56, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 57, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 58, name: '문의', title: '질문합니다', date: '2024-04-18', check: '123' },
    { id: 59, name: '문의', title: '질문', date: '2024-04-18', check: '592' },
    { id: 60, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 61, name: '문의', title: '문의드립니다', date: '2024-04-18', check: '548' },
    { id: 62, name: '문의', title: '질문합니다', date: '2024-04-18', check: '592' },
    { id: 63, name: '문의', title: '질문합니다', date: '2024-04-17', check: '563' },
    { id: 64, name: '문의', title: '질문합니다', date: '2024-04-17', check: '592' },
    { id: 65, name: '문의', title: '질문합니다', date: '2024-04-17', check: '592' },
    { id: 66, name: '문의', title: '질문', date: '2024-04-17', check: '592' },
    { id: 67, name: '문의', title: '질문합니다', date: '2024-04-17', check: '592' },
    { id: 68, name: '문의', title: '질문합니다', date: '2024-04-17', check: '592' },
    { id: 69, name: '문의', title: '질문합니다', date: '2024-04-17', check: '92' },
    { id: 70, name: '문의', title: '질문', date: '2024-04-17', check: '951' },
    { id: 71, name: '문의', title: '질문합니다', date: '2024-04-17', check: '59' },
    { id: 72, name: '문의', title: '문의드립니다', date: '2024-04-16', check: '52' },
    { id: 73, name: '문의', title: '질문합니다', date: '2024-04-16', check: '592' },
    { id: 74, name: '문의', title: '질문합니다', date: '2024-04-16', check: '123' },
    { id: 75, name: '문의', title: '질문합니다', date: '2024-04-16', check: '357' },
    { id: 76, name: '문의', title: '질문합니다', date: '2024-04-16', check: '592' },
    { id: 77, name: '문의', title: '질문', date: '2024-04-16', check: '592' },
    { id: 78, name: '문의', title: '질문합니다', date: '2024-04-16', check: '123' },
    { id: 79, name: '문의', title: '문의드립니다', date: '2024-04-16', check: '460' },
    { id: 80, name: '문의', title: '질문합니다', date: '2024-04-15', check: '505' },
    { id: 81, name: '문의', title: '질문합니다', date: '2024-04-15', check: '31' },
    { id: 82, name: '문의', title: '질문합니다', date: '2024-04-15', check: '213' },
    { id: 83, name: '문의', title: '질문있습니다', date: '2024-04-15', check: '568' },
    { id: 84, name: '문의', title: '질문합니다', date: '2024-04-15', check: '592' },
    { id: 85, name: '문의', title: '질문합니다', date: '2024-04-15', check: '592' },
    { id: 86, name: '문의', title: '질문합니다', date: '2024-04-15', check: '301' },
    { id: 87, name: '문의', title: '문의드립니다', date: '2024-04-15', check: '592' },
    { id: 88, name: '문의', title: '질문합니다', date: '2024-04-15', check: '368' },
    { id: 89, name: '문의', title: '질문', date: '2024-04-15', check: '569' },
    { id: 90, name: '문의', title: '질문합니다', date: '2024-04-15', check: '398' },
    { id: 91, name: '문의', title: '질문합니다', date: '2024-04-15', check: '312' },
    { id: 92, name: '문의', title: '질문합니다', date: '2024-04-14', check: '120' },
    { id: 93, name: '문의', title: '질문합니다', date: '2024-04-14', check: '123' },
    { id: 94, name: '문의', title: '질문', date: '2024-04-14', check: '629' },
    { id: 95, name: '문의', title: '문의드립니다', date: '2024-04-14', check: '527' },
    { id: 96, name: '문의', title: '질문합니다', date: '2024-04-14', check: '547' },
    { id: 97, name: '문의', title: '질문합니다', date: '2024-04-14', check: '475' },
    { id: 98, name: '문의', title: '질문있습니다', date: '2024-04-14', check: '567' },
    { id: 99, name: '문의', title: '질문합니다', date: '2024-04-14', check: '123' },
    { id: 100, name: '문의', title: '질문합니다', date: '2024-04-14', check: '592' },
];

export default data;
