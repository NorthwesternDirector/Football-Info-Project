import { mockData } from '../../utils/utils'

export default {
  '/api/paper': mockData([
    { id: 1, date: '2020-02-08', wordNumberS: 0, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 1, date: '2020-02-09', wordNumberS: 534, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 2, date: '2020-02-10', wordNumberS: 1510, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 3, date: '2020-02-11', wordNumberS: 2677, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 4, date: '2020-02-12', wordNumberS: 3192, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 5, date: '2020-02-13', wordNumberS: 3766, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 6, date: '2020-02-14', wordNumberS: 4463, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 7, date: '2020-02-15', wordNumberS: 5070, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 8, date: '2020-02-16', wordNumberS: 6188, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 9, date: '2020-02-17', wordNumberS: 7376, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 10, date: '2020-02-18', wordNumberS: 9473, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 11, date: '2020-02-19', wordNumberS: 10779, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 12, date: '2020-02-20', wordNumberS: 13918, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 13, date: '2020-02-21', wordNumberS: 15814, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 14, date: '2020-02-22', wordNumberS: 16758, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 15, date: '2020-02-23', wordNumberS: 17201, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 16, date: '2020-02-24', wordNumberS: 17960, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 17, date: '2020-02-25', wordNumberS: 19132, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 18, date: '2020-02-26', wordNumberS: 20744, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 19, date: '2020-02-27', wordNumberS: 23439, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 20, date: '2020-02-28', wordNumberS: 24543, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 21, date: '2020-02-29', wordNumberS: 25563, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 22, date: '2020-03-01', wordNumberS: 26321, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 23, date: '2020-03-02', wordNumberS: 27386, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 24, date: '2020-03-03', wordNumberS: 28034, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 25, date: '2020-03-04', wordNumberS: 30026, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 26, date: '2020-03-05', wordNumberS: 30026, wordNumberT: 0, repetitonS: 100, repetitonT: 100 },
    { id: 27, date: '2020-03-06', wordNumberS: 30644, wordNumberT: 0, repetitonS: 26.5, repetitonT: 100 },
    { id: 28, date: '2020-03-07', wordNumberS: 31701, wordNumberT: 255, repetitonS: 22.4, repetitonT: 100 },
    { id: 29, date: '2020-03-08', wordNumberS: 31658, wordNumberT: 255, repetitonS: 15.1, repetitonT: 100 },
    { id: 30, date: '2020-03-09', wordNumberS: 31313, wordNumberT: 255, repetitonS: 15.1, repetitonT: 100 },
    { id: 31, date: '2020-03-10', wordNumberS: 31313, wordNumberT: 255, repetitonS: 15.1, repetitonT: 100 },
    { id: 32, date: '2020-03-11', wordNumberS: 31313, wordNumberT: 255, repetitonS: 6.1, repetitonT: 100 },
    { id: 33, date: '2020-03-12', wordNumberS: 31323, wordNumberT: 255, repetitonS: 6.1, repetitonT: 100 },
    { id: 34, date: '2020-03-13', wordNumberS: 31323, wordNumberT: 255, repetitonS: 6.1, repetitonT: 100 },

  ]),
  '/api/virus': mockData([
    { id: 1, date: '2020-01-23', updateTime: '2020-01-24', newConfirmedCase: 256, newDeath: 8, newCuredCase: 6, newSuspectedCase: 680, totalConfirmedCase: 830, totalDeath: 25, totalCuredCase: 6, totalSuspectedCase: 1072, watch: 4928, remove: 969, touch: 5897 },
    { id: 2, date: '2020-01-24', updateTime: '2020-01-25', newConfirmedCase: 444, newDeath: 16, newCuredCase: 3, newSuspectedCase: 1118, totalConfirmedCase: 1287, totalDeath: 41, totalCuredCase: 38, totalSuspectedCase: 1965, watch: 13967, remove: 1230, touch: 9507 },
    { id: 3, date: '2020-01-25', updateTime: '2020-01-26', newConfirmedCase: 688, newDeath: 15, newCuredCase: 11, newSuspectedCase: 1309, totalConfirmedCase: 1975, totalDeath: 56, totalCuredCase: 49, totalSuspectedCase: 2684, watch: 21556, remove: 325, touch: 23431 },
    { id: 4, date: '2020-01-26', updateTime: '2020-01-27', newConfirmedCase: 769, newDeath: 24, newCuredCase: 2, newSuspectedCase: 3806, totalConfirmedCase: 2744, totalDeath: 80, totalCuredCase: 51, totalSuspectedCase: 5794, watch: 30453, remove: 583, touch: 32799 },
    { id: 5, date: '2020-01-27', updateTime: '2020-01-28', newConfirmedCase: 1771, newDeath: 26, newCuredCase: 9, newSuspectedCase: 2077, totalConfirmedCase: 4515, totalDeath: 106, totalCuredCase: 60, totalSuspectedCase: 6973, watch: 44132, remove: 914, touch: 47833 },
    { id: 6, date: '2020-01-28', updateTime: '2020-01-29', newConfirmedCase: 1459, newDeath: 26, newCuredCase: 43, newSuspectedCase: 3248, totalConfirmedCase: 5974, totalDeath: 132, totalCuredCase: 103, totalSuspectedCase: 9239, watch: 59990, remove: 1604, touch: 65537 },
    { id: 7, date: '2020-01-29', updateTime: '2020-01-30', newConfirmedCase: 1737, newDeath: 38, newCuredCase: 21, newSuspectedCase: 4148, totalConfirmedCase: 7711, totalDeath: 170, totalCuredCase: 124, totalSuspectedCase: 12167, watch: 81947, remove: 2364, touch: 88693 },
    { id: 8, date: '2020-01-30', updateTime: '2020-01-31', newConfirmedCase: 1982, newDeath: 43, newCuredCase: 47, newSuspectedCase: 4812, totalConfirmedCase: 9692, totalDeath: 213, totalCuredCase: 171, totalSuspectedCase: 15238, watch: 102427, remove: 4201, touch: 113579 },
    { id: 9, date: '2020-01-31', updateTime: '2020-02-01', newConfirmedCase: 2102, newDeath: 46, newCuredCase: 72, newSuspectedCase: 5019, totalConfirmedCase: 11791, totalDeath: 259, totalCuredCase: 243, totalSuspectedCase: 17988, watch: 118478, remove: 6509, touch: 136987 },
    { id: 10, date: '2020-02-01', updateTime: '2020-02-02', newConfirmedCase: 2590, newDeath: 45, newCuredCase: 85, newSuspectedCase: 4562, totalConfirmedCase: 14380, totalDeath: 304, totalCuredCase: 328, totalSuspectedCase: 19544, watch: 137594, remove: 8044, touch: 163844 },
    { id: 11, date: '2020-02-02', updateTime: '2020-02-03', newConfirmedCase: 2829, newDeath: 57, newCuredCase: 147, newSuspectedCase: 5173, totalConfirmedCase: 17205, totalDeath: 361, totalCuredCase: 475, totalSuspectedCase: 21558, watch: 152700, remove: 10055, touch: 189583 },
    { id: 12, date: '2020-02-03', updateTime: '2020-02-04', newConfirmedCase: 3235, newDeath: 64, newCuredCase: 157, newSuspectedCase: 5072, totalConfirmedCase: 20438, totalDeath: 425, totalCuredCase: 632, totalSuspectedCase: 23214, watch: 171329, remove: 12755, touch: 221015 },
    { id: 13, date: '2020-02-04', updateTime: '2020-02-05', newConfirmedCase: 3887, newDeath: 65, newCuredCase: 262, newSuspectedCase: 3971, totalConfirmedCase: 24324, totalDeath: 490, totalCuredCase: 892, totalSuspectedCase: 23260, watch: 185555, remove: 18457, touch: 252154 },
    { id: 14, date: '2020-02-05', updateTime: '2020-02-06', newConfirmedCase: 3694, newDeath: 73, newCuredCase: 261, newSuspectedCase: 5328, totalConfirmedCase: 28018, totalDeath: 563, totalCuredCase: 1153, totalSuspectedCase: 24702, watch: 186354, remove: 21365, touch: 282813 },
    { id: 15, date: '2020-02-06', updateTime: '2020-02-07', newConfirmedCase: 3143, newDeath: 73, newCuredCase: 387, newSuspectedCase: 4833, totalConfirmedCase: 31161, totalDeath: 636, totalCuredCase: 1540, totalSuspectedCase: 26359, watch: 186045, remove: 26762, touch: 314028 },
    { id: 16, date: '2020-02-07', updateTime: '2020-02-08', newConfirmedCase: 4214, newDeath: 86, newCuredCase: 510, newSuspectedCase: 4562, totalConfirmedCase: 31774, totalDeath: 722, totalCuredCase: 2050, totalSuspectedCase: 27657, watch: 189660, remove: 26702, touch: 345498 },
    { id: 17, date: '2020-02-08', updateTime: '2020-02-09', newConfirmedCase: 2656, newDeath: 89, newCuredCase: 600, newSuspectedCase: 3916, totalConfirmedCase: 33738, totalDeath: 811, totalCuredCase: 2649, totalSuspectedCase: 28942, watch: 188183, remove: 31124, touch: 371905 },
    { id: 18, date: '2020-02-09', updateTime: '2020-02-10', newConfirmedCase: 3062, newDeath: 97, newCuredCase: 632, newSuspectedCase: 4008, totalConfirmedCase: 35982, totalDeath: 908, totalCuredCase: 3281, totalSuspectedCase: 23589, watch: 187518, remove: 29307, touch: 399487 },
    { id: 19, date: '2020-02-10', updateTime: '2020-02-11', newConfirmedCase: 2478, newDeath: 108, newCuredCase: 716, newSuspectedCase: 3536, totalConfirmedCase: 37626, totalDeath: 1016, totalCuredCase: 3996, totalSuspectedCase: 21675, watch: 187728, remove: 26724, touch: 428438 },
    { id: 20, date: '2020-02-11', updateTime: '2020-02-12', newConfirmedCase: 2051, newDeath: 97, newCuredCase: 744, newSuspectedCase: 3342, totalConfirmedCase: 38800, totalDeath: 1113, totalCuredCase: 4740, totalSuspectedCase: 16067, watch: 185037, remove: 30068, touch: 451462 },
    { id: 21, date: '2020-02-12', updateTime: '2020-02-13', newConfirmedCase: 15152, newDeath: 254, newCuredCase: 1171, newSuspectedCase: 2807, totalConfirmedCase: 52526, totalDeath: 1367, totalCuredCase: 5911, totalSuspectedCase: 13435, watch: 181386, remove: 29429, touch: 471531 },
    { id: 22, date: '2020-02-13', updateTime: '2020-02-14', newConfirmedCase: 5090, newDeath: 121, newCuredCase: 1081, newSuspectedCase: 2450, totalConfirmedCase: 55748, totalDeath: 1380, totalCuredCase: 6723, totalSuspectedCase: 10109, watch: 177984, remove: 26905, touch: 493067 },
    { id: 23, date: '2020-02-14', updateTime: '2020-02-15', newConfirmedCase: 2641, newDeath: 143, newCuredCase: 1373, newSuspectedCase: 2277, totalConfirmedCase: 56873, totalDeath: 1523, totalCuredCase: 8096, totalSuspectedCase: 8969, watch: 169039, remove: 30081, touch: 513183 },
    { id: 24, date: '2020-02-15', updateTime: '2020-02-16', newConfirmedCase: 2009, newDeath: 142, newCuredCase: 1323, newSuspectedCase: 1918, totalConfirmedCase: 57416, totalDeath: 1665, totalCuredCase: 9419, totalSuspectedCase: 8228, watch: 158764, remove: 29788, touch: 529418 },
    { id: 25, date: '2020-02-16', updateTime: '2020-02-17', newConfirmedCase: 2048, newDeath: 105, newCuredCase: 1425, newSuspectedCase: 1563, totalConfirmedCase: 57934, totalDeath: 1770, totalCuredCase: 10844, totalSuspectedCase: 7264, watch: 150539, remove: 28178, touch: 546016 },
    { id: 26, date: '2020-02-17', updateTime: '2020-02-18', newConfirmedCase: 1886, newDeath: 98, newCuredCase: 1701, newSuspectedCase: 1432, totalConfirmedCase: 58016, totalDeath: 1868, totalCuredCase: 12552, totalSuspectedCase: 6242, watch: 141552, remove: 27908, touch: 560901 },
    { id: 27, date: '2020-02-18', updateTime: '2020-02-19', newConfirmedCase: 1749, newDeath: 136, newCuredCase: 1824, newSuspectedCase: 1185, totalConfirmedCase: 57805, totalDeath: 2004, totalCuredCase: 14376, totalSuspectedCase: 5248, watch: 135881, remove: 25014, touch: 574418 },
    { id: 28, date: '2020-02-19', updateTime: '2020-02-20', newConfirmedCase: 394, newDeath: 114, newCuredCase: 1779, newSuspectedCase: 1277, totalConfirmedCase: 56303, totalDeath: 2118, totalCuredCase: 16155, totalSuspectedCase: 4922, watch: 126363, remove: 25318, touch: 589163 },
    { id: 29, date: '2020-02-20', updateTime: '2020-02-21', newConfirmedCase: 889, newDeath: 118, newCuredCase: 2109, newSuspectedCase: 1614, totalConfirmedCase: 54965, totalDeath: 2236, totalCuredCase: 18264, totalSuspectedCase: 5206, watch: 120302, remove: 28804, touch: 606037 },
    { id: 30, date: '2020-02-21', updateTime: '2020-02-22', newConfirmedCase: 397, newDeath: 109, newCuredCase: 2393, newSuspectedCase: 1361, totalConfirmedCase: 53284, totalDeath: 2345, totalCuredCase: 20659, totalSuspectedCase: 5365, watch: 113564, remove: 26441, touch: 618915 },
    { id: 31, date: '2020-02-22', updateTime: '2020-02-23', newConfirmedCase: 648, newDeath: 97, newCuredCase: 2230, newSuspectedCase: 882, totalConfirmedCase: 51606, totalDeath: 2442, totalCuredCase: 22888, totalSuspectedCase: 4148, watch: 106089, remove: 22128, touch: 628517 },
    { id: 32, date: '2020-02-23', updateTime: '2020-02-24', newConfirmedCase: 409, newDeath: 150, newCuredCase: 1846, newSuspectedCase: 620, totalConfirmedCase: 49824, totalDeath: 2592, totalCuredCase: 24734, totalSuspectedCase: 3434, watch: 97481, remove: 16758, touch: 635531 },
    { id: 33, date: '2020-02-24', updateTime: '2020-02-25', newConfirmedCase: 508, newDeath: 71, newCuredCase: 2589, newSuspectedCase: 530, totalConfirmedCase: 47672, totalDeath: 2663, totalCuredCase: 27323, totalSuspectedCase: 2824, watch: 87902, remove: 15758, touch: 641742 },
    { id: 34, date: '2020-02-25', updateTime: '2020-02-26', newConfirmedCase: 406, newDeath: 52, newCuredCase: 2422, newSuspectedCase: 439, totalConfirmedCase: 45604, totalDeath: 2715, totalCuredCase: 29745, totalSuspectedCase: 2491, watch: 79108, remove: 14573, touch: 647406 },
    { id: 35, date: '2020-02-26', updateTime: '2020-02-27', newConfirmedCase: 433, newDeath: 29, newCuredCase: 2750, newSuspectedCase: 508, totalConfirmedCase: 43258, totalDeath: 2744, totalCuredCase: 32495, totalSuspectedCase: 2358, watch: 71572, remove: 12823, touch: 652174 },
    { id: 36, date: '2020-02-27', updateTime: '2020-02-28', newConfirmedCase: 327, newDeath: 44, newCuredCase: 3622, newSuspectedCase: 452, totalConfirmedCase: 39919, totalDeath: 2788, totalCuredCase: 36117, totalSuspectedCase: 2308, watch: 65225, remove: 10525, touch: 656054 },
    { id: 37, date: '2020-02-28', updateTime: '2020-02-29', newConfirmedCase: 427, newDeath: 47, newCuredCase: 2885, newSuspectedCase: 248, totalConfirmedCase: 37414, totalDeath: 2835, totalCuredCase: 39002, totalSuspectedCase: 1418, watch: 58233, remove: 10193, touch: 658587 },
    { id: 38, date: '2020-02-29', updateTime: '2020-03-01', newConfirmedCase: 573, newDeath: 35, newCuredCase: 2623, newSuspectedCase: 132, totalConfirmedCase: 35329, totalDeath: 2870, totalCuredCase: 41625, totalSuspectedCase: 851, watch: 51856, remove: 8620, touch: 660716 },
    { id: 39, date: '2020-03-01', updateTime: '2020-03-02', newConfirmedCase: 202, newDeath: 42, newCuredCase: 2837, newSuspectedCase: 141, totalConfirmedCase: 32652, totalDeath: 2912, totalCuredCase: 44462, totalSuspectedCase: 751, watch: 46219, remove: 8154, touch: 663240 },
    { id: 40, date: '2020-03-02', updateTime: '2020-03-03', newConfirmedCase: 125, newDeath: 31, newCuredCase: 2742, newSuspectedCase: 129, totalConfirmedCase: 30004, totalDeath: 2943, totalCuredCase: 47204, totalSuspectedCase: 587, watch: 40651, remove: 7650, touch: 664899 },
    { id: 41, date: '2020-03-03', updateTime: '2020-03-04', newConfirmedCase: 119, newDeath: 38, newCuredCase: 2652, newSuspectedCase: 143, totalConfirmedCase: 27433, totalDeath: 2981, totalCuredCase: 49856, totalSuspectedCase: 520, watch: 36432, remove: 6250, touch: 666397 },
    { id: 42, date: '2020-03-04', updateTime: '2020-03-05', newConfirmedCase: 139, newDeath: 31, newCuredCase: 2189, newSuspectedCase: 143, totalConfirmedCase: 25352, totalDeath: 3012, totalCuredCase: 52045, totalSuspectedCase: 522, watch: 32870, remove: 6584, touch: 669025 },
    { id: 43, date: '2020-03-05', updateTime: '2020-03-06', newConfirmedCase: 143, newDeath: 30, newCuredCase: 1681, newSuspectedCase: 102, totalConfirmedCase: 23784, totalDeath: 3042, totalCuredCase: 53726, totalSuspectedCase: 482, watch: 29896, remove: 5457, touch: 670854 },
    { id: 44, date: '2020-03-06', updateTime: '2020-03-07', newConfirmedCase: 99, newDeath: 28, newCuredCase: 1678, newSuspectedCase: 99, totalConfirmedCase: 22177, totalDeath: 3070, totalCuredCase: 55404, totalSuspectedCase: 502, watch: 26730, remove: 4773, touch: 672458 },
    { id: 45, date: '2020-03-07', updateTime: '2020-03-08', newConfirmedCase: 44, newDeath: 27, newCuredCase: 1661, newSuspectedCase: 84, totalConfirmedCase: 20533, totalDeath: 3097, totalCuredCase: 57065, totalSuspectedCase: 458, watch: 23074, remove: 4021, touch: 674038 },
    { id: 46, date: '2020-03-08', updateTime: '2020-03-09', newConfirmedCase: 40, newDeath: 22, newCuredCase: 1535, newSuspectedCase: 60, totalConfirmedCase: 19016, totalDeath: 3119, totalCuredCase: 58600, totalSuspectedCase: 421, watch: 20146, remove: 3802, touch: 674760 },
    { id: 47, date: '2020-03-09', updateTime: '2020-03-10', newConfirmedCase: 19, newDeath: 17, newCuredCase: 1297, newSuspectedCase: 36, totalConfirmedCase: 17721, totalDeath: 3136, totalCuredCase: 59897, totalSuspectedCase: 349, watch: 16982, remove: 4148, touch: 675338 },
    { id: 48, date: '2020-03-10', updateTime: '2020-03-11', newConfirmedCase: 24, newDeath: 22, newCuredCase: 1578, newSuspectedCase: 31, totalConfirmedCase: 16145, totalDeath: 3158, totalCuredCase: 61475, totalSuspectedCase: 285, watch: 14607, remove: 3235, touch: 675886 },
    { id: 49, date: '2020-03-11', updateTime: '2020-03-12', newConfirmedCase: 15, newDeath: 11, newCuredCase: 1318, newSuspectedCase: 33, totalConfirmedCase: 14831, totalDeath: 3169, totalCuredCase: 62793, totalSuspectedCase: 253, watch: 13701, remove: 2206, touch: 677243 },
    { id: 50, date: '2020-03-12', updateTime: '2020-03-13', newConfirmedCase: 8, newDeath: 7, newCuredCase: 1318, newSuspectedCase: 33, totalConfirmedCase: 13524, totalDeath: 3176, totalCuredCase: 64111, totalSuspectedCase: 253, watch: 12161, remove: 2483, touch: 678088 },

  ]),
  '/api/games': mockData([
    { id: 1, round: '第1轮', me: 0, father: -4, mother: -3, meL: 1.17, fatherL: 1.5, motherL: 5.33, meT: 1.17, fatherT: -2.5, motherT: 2.33 },
    { id: 2, round: '第2轮', me: -10, father: 0, mother: 0, meL: 2.45, fatherL: 4.88, motherL: 2.67, meT: -6.38, fatherT: 2.38, motherT: 5 },
    { id: 3, round: '第3轮', me: 0, father: 0, mother: -4, meL: 0.57, fatherL: 0.79, motherL: 2.64, meT: -5.81, fatherT: 3.17, motherT: 3.64 },
    { id: 4, round: '第4轮', me: 0, father: -4, mother: -4, meL: 3.28, fatherL: 2.9, motherL: 1.82, meT: -2.53, fatherT: 2.07, motherT: 1.46 },
    { id: 5, round: '第5轮', me: -2, father: 0, mother: -3, meL: 3.71, fatherL: 0.3, motherL: 0.99, meT: -1.36, fatherT: 2.37, motherT: -0.55 },
    { id: 6, round: '第6轮', me: 0, father: 0, mother: -4, meL: 1.72, fatherL: 2.03, motherL: 0.25, meT: 0.36, fatherT: 4.4, motherT: -4.3 },
    { id: 7, round: '第7轮', me: -6, father: 0, mother: 0, meL: 1.49, fatherL: 2.79, motherL: 1.72, meT: -4.15, fatherT: 7.19, motherT: -2.58 },
    { id: 8, round: '第8轮', me: -4, father: 0, mother: -2, meL: 1.59, fatherL: 3.26, motherL: 1.15, meT: -6.56, fatherT: 10.45, motherT: -3.43 },
    { id: 9, round: '第9轮', me: 0, father: -2, mother: 0, meL: 0.41, fatherL: 0.54, motherL: 1.05, meT: -6.15, fatherT: 8.99, motherT: -2.38 },
    { id: 10, round: '第10轮', me: 0, father: -4, mother: -10, meL: 3.02, fatherL: 4.73, motherL: 6.25, meT: -3.13, fatherT: 9.72, motherT: -6.13 },
    { id: 11, round: '第11轮', me: -4, father: -4, mother: 0, meL: 2.19, fatherL: 0.49, motherL: 5.32, meT: -4.94, fatherT: 6.21, motherT: -0.81 },
    { id: 12, round: '第12轮', me: -4, father: -8, mother: 0, meL: 2.92, fatherL: 8.45, motherL: 0.63, meT: -6.02, fatherT: 6.66, motherT: -0.18 },
    { id: 13, round: '第13轮', me: -4, father: 0, mother: -4, meL: 2.82, fatherL: 4.03, motherL: 1.15, meT: -7.2, fatherT: 10.69, motherT: -3.03 },
    { id: 14, round: '第14轮', me: 0, father: -2, mother: -6, meL: 1.17, fatherL: 1.5, motherL: 5.33, meT: -6.03, fatherT: 10.19, motherT: -3.7 },
    { id: 15, round: '第15轮', me: -20, father: -8, mother: 0, meL: 6.66, fatherL: 20.17, motherL: 1.17, meT: -19.37, fatherT: 21.9, motherT: -2.53 },

  ]),
  '/api/times': mockData([
    {
      timeRange: '2020-01-01,2020-12-31',
      list: [
        { id: 1, date: '2020-01-01', workTime: ['', '', 0], sleepTime: ['23:48', 8.42, 1.48], walkingSteps: 1959, physicalExercise: [0, 0, 0, 0] },
        { id: 2, date: '2020-01-02', workTime: ['08:53:00', '20:25:00', 8.53], sleepTime: ['23:48', 8.42, 1.48], walkingSteps: 6525, physicalExercise: [0, 0, 0, 0] },
        { id: 3, date: '2020-01-03', workTime: ['08:53:00', '18:30:00', 6.62], sleepTime: ['00:14', 8.47, 1.42], walkingSteps: 4642, physicalExercise: [0, 0, 0, 0] },
        { id: 4, date: '2020-01-04', workTime: ['', '', 0], sleepTime: ['23:14', 8.47, 2.42], walkingSteps: 13095, physicalExercise: [0, 0, 0, 0] },
        { id: 5, date: '2020-01-05', workTime: ['', '', 0], sleepTime: ['00:02', 9.12, 1.73], walkingSteps: 9505, physicalExercise: [0, 0, 0, 0] },
        { id: 6, date: '2020-01-06', workTime: ['08:53:00', '20:31:00', 8.40], sleepTime: ['00:58', 7.42, 1.78], walkingSteps: 13095, physicalExercise: [0, 0, 0, 0] },
        { id: 7, date: '2020-01-07', workTime: ['09:00:00', '20:18:00', 8.30], sleepTime: ['23:51', 8.30, 1.93], walkingSteps: 9505, physicalExercise: [0, 0, 0, 0] },
        { id: 8, date: '2020-01-08', workTime: ['09:02:00', '20:55:00', 8.05], sleepTime: ['23:28', 8.72, 2.22], walkingSteps: 7168, physicalExercise: [0, 0, 0, 0] },
        { id: 9, date: '2020-01-09', workTime: ['09:15:00', '20:40:00', 8.42], sleepTime: ['00:45', 7.58, 1.25], walkingSteps: 5450, physicalExercise: [0, 0, 0, 0] },
        { id: 10, date: '2020-01-10', workTime: ['09:08:00', '22:01:00', 9.88], sleepTime: ['23:53', 8.65, 1.90], walkingSteps: 7529, physicalExercise: [0, 0, 0, 0] },
        { id: 11, date: '2020-01-11', workTime: ['', '', 0], sleepTime: ['00:59', 10.40, 1.72], walkingSteps: 6146, physicalExercise: [0, 0, 0, 0] },
        { id: 12, date: '2020-01-12', workTime: ['', '', 0], sleepTime: ['00:46', 9.45, 2.13], walkingSteps: 11456, physicalExercise: [0, 0, 0, 0] },
        { id: 13, date: '2020-01-13', workTime: ['08:56:00', '21:10:00', 9.23], sleepTime: ['23:50', 8.50, 1.03], walkingSteps: 3764, physicalExercise: [0, 0, 0, 0] },
        { id: 14, date: '2020-01-14', workTime: ['08:56:00', '19:00:00', 7.07], sleepTime: ['00:13', 8.23, 1.58], walkingSteps: 5919, physicalExercise: [0, 0, 0, 0] },
        { id: 15, date: '2020-01-15', workTime: ['09:00:00', '18:45:00', 6.75], sleepTime: ['00:34', 7.77, 2.15], walkingSteps: 6146, physicalExercise: [0, 0, 0, 0] },
        { id: 16, date: '2020-01-16', workTime: ['09:10:00', '18:30:00', 6.33], sleepTime: ['00:39', 8.00, 1.83], walkingSteps: 11456, physicalExercise: [0, 0, 0, 0] },
        { id: 17, date: '2020-01-17', workTime: ['09:05:00', '20:05:00', 8.00], sleepTime: ['00:59', 6.00, 1.08], walkingSteps: 5724, physicalExercise: [0, 0, 0, 0] },
        { id: 18, date: '2020-01-18', workTime: ['', '', 0], sleepTime: ['00:23', 9.80, 2.98], walkingSteps: 2565, physicalExercise: [0, 0, 0, 0] },
        { id: 19, date: '2020-01-19', workTime: ['09:15:00', '20:45:00', 8.50], sleepTime: ['23:37', 8.87, 2.15], walkingSteps: 5557, physicalExercise: [0, 0, 0, 0] },
        { id: 20, date: '2020-01-20', workTime: ['09:09:00', '18:30:00', 6.35], sleepTime: ['00:15', 7.80, 1.90], walkingSteps: 10676, physicalExercise: [0, 0, 0, 0] },
        { id: 21, date: '2020-01-21', workTime: ['', '', 0], sleepTime: ['00:16', 7.20, 1.37], walkingSteps: 3476, physicalExercise: [0, 0, 0, 0] },
        { id: 22, date: '2020-01-22', workTime: ['', '', 0], sleepTime: ['00:40', 10.52, 1.35], walkingSteps: 17524, physicalExercise: [0, 0, 0, 0] },
        { id: 23, date: '2020-01-23', workTime: ['', '', 0], sleepTime: ['23:53', 8.57, 1.47], walkingSteps: 1311, physicalExercise: [0, 0, 0, 0] },
        { id: 24, date: '2020-01-24', workTime: ['', '', 0], sleepTime: ['23:54', 10.03, 1.60], walkingSteps: 5928, physicalExercise: [0, 0, 0, 0] },
        { id: 25, date: '2020-01-25', workTime: ['', '', 0], sleepTime: ['00:59', 6.00, 2.23], walkingSteps: 4441, physicalExercise: [0, 0, 0, 0] },
        { id: 26, date: '2020-01-26', workTime: ['', '', 0], sleepTime: ['23:34', 10.96, 1.80], walkingSteps: 933, physicalExercise: [0, 0, 0, 0] },
        { id: 27, date: '2020-01-27', workTime: ['', '', 0], sleepTime: ['00:22', 9.17, 1.52], walkingSteps: 1282, physicalExercise: [0, 0, 0, 0] },
        { id: 28, date: '2020-01-28', workTime: ['', '', 0], sleepTime: ['00:05', 10.17, 1.68], walkingSteps: 1022, physicalExercise: [0, 0, 0, 0] },
        { id: 29, date: '2020-01-29', workTime: ['', '', 0], sleepTime: ['23:53', 8.80, 1.62], walkingSteps: 1011, physicalExercise: [30, 0, 0, 0] },
        { id: 30, date: '2020-01-30', workTime: ['', '', 0], sleepTime: ['23:43', 10.17, 1.70], walkingSteps: 2140, physicalExercise: [41, 0, 0, 0] },
        { id: 31, date: '2020-01-31', workTime: ['', '', 0], sleepTime: ['00:31', 9.17, 1.05], walkingSteps: 1082, physicalExercise: [23, 0, 0, 0] },
        { id: 32, date: '2020-02-01', workTime: ['', '', 0], sleepTime: ['23:32', 8.72, 1.58], walkingSteps: 673, physicalExercise: [15, 0, 0, 0] },
        { id: 33, date: '2020-02-02', workTime: ['', '', 0], sleepTime: ['00:30', 8.67, 0.43], walkingSteps: 2161, physicalExercise: [15, 0, 0, 0] },
        { id: 34, date: '2020-02-03', workTime: ['', '', 0], sleepTime: ['23:38', 8.25, 1.35], walkingSteps: 696, physicalExercise: [10, 0, 0, 0] },
        { id: 35, date: '2020-02-04', workTime: ['', '', 0], sleepTime: ['00:07', 8.85, 1.50], walkingSteps: 599, physicalExercise: [15, 0, 0, 0] },
        { id: 36, date: '2020-02-05', workTime: ['', '', 0], sleepTime: ['23:41', 8.68, 1.23], walkingSteps: 983, physicalExercise: [30, 0, 0, 0] },
        { id: 37, date: '2020-02-06', workTime: ['', '', 0], sleepTime: ['00:13', 8.48, 0.90], walkingSteps: 1500, physicalExercise: [25, 0, 0, 0] },
        { id: 38, date: '2020-02-07', workTime: ['', '', 0], sleepTime: ['23:30', 8.82, 1.97], walkingSteps: 460, physicalExercise: [15, 0, 0, 0] },
        { id: 39, date: '2020-02-08', workTime: ['', '', 0], sleepTime: ['00:02', 10.13, 1.03], walkingSteps: 1909, physicalExercise: [10, 0, 0, 0] },
        { id: 40, date: '2020-02-09', workTime: ['', '', 0], sleepTime: ['00:59', 8.03, 1.43], walkingSteps: 2219, physicalExercise: [20, 0, 0, 0] },
        { id: 41, date: '2020-02-10', workTime: ['', '', 0], sleepTime: ['23:34', 9.25, 0.78], walkingSteps: 1771, physicalExercise: [15, 0, 0, 0] },
        { id: 42, date: '2020-02-11', workTime: ['', '', 0], sleepTime: ['23:14', 8.62, 1.01], walkingSteps: 1287, physicalExercise: [15, 0, 0, 0] },
        { id: 43, date: '2020-02-12', workTime: ['', '', 0], sleepTime: ['22:06', 9.77, 0.53], walkingSteps: 843, physicalExercise: [15, 0, 0, 0] },
        { id: 44, date: '2020-02-13', workTime: ['', '', 0], sleepTime: ['00:59', 8.08, 1.22], walkingSteps: 1249, physicalExercise: [15, 0, 0, 0] },
        { id: 45, date: '2020-02-14', workTime: ['', '', 0], sleepTime: ['23:47', 9.07, 0.55], walkingSteps: 1962, physicalExercise: [15, 0, 0, 0] },
        { id: 46, date: '2020-02-15', workTime: ['', '', 0], sleepTime: ['00:50', 8.47, 0.85], walkingSteps: 971, physicalExercise: [20, 0, 0, 0] },
        { id: 47, date: '2020-02-16', workTime: ['', '', 0], sleepTime: ['00:59', 8.43, 2.28], walkingSteps: 686, physicalExercise: [20, 0, 0, 0] },
        { id: 48, date: '2020-02-17', workTime: ['', '', 0], sleepTime: ['00:05', 7.28, 1.58], walkingSteps: 1575, physicalExercise: [20, 0, 0, 0] },
        { id: 49, date: '2020-02-18', workTime: ['', '', 0], sleepTime: ['23:37', 8.87, 0.87], walkingSteps: 2904, physicalExercise: [20, 0, 0, 0] },
        { id: 50, date: '2020-02-19', workTime: ['', '', 0], sleepTime: ['23:30', 8.75, 1.28], walkingSteps: 1875, physicalExercise: [20, 0, 0, 0] },
        { id: 51, date: '2020-02-20', workTime: ['', '', 0], sleepTime: ['23:47', 9.27, 1.62], walkingSteps: 1719, physicalExercise: [15, 0, 0, 0] },
        { id: 52, date: '2020-02-21', workTime: ['', '', 0], sleepTime: ['23:41', 9.00, 1.02], walkingSteps: 764, physicalExercise: [15, 0, 0, 0] },
        { id: 53, date: '2020-02-22', workTime: ['', '', 0], sleepTime: ['23:29', 9.47, 1.28], walkingSteps: 2624, physicalExercise: [30, 0, 0, 0] },
        { id: 54, date: '2020-02-23', workTime: ['', '', 0], sleepTime: ['23:34', 8.91, 1.45], walkingSteps: 9288, physicalExercise: [10, 0, 0, 0] },
        { id: 55, date: '2020-02-24', workTime: ['', '', 0], sleepTime: ['23:30', 9.05, 0.78], walkingSteps: 1104, physicalExercise: [10, 0, 0, 0] },
        { id: 56, date: '2020-02-25', workTime: ['', '', 0], sleepTime: ['23:32', 9.08, 1.42], walkingSteps: 7458, physicalExercise: [10, 0, 0, 0] },
        { id: 57, date: '2020-02-26', workTime: ['', '', 0], sleepTime: ['23:41', 8.33, 1.21], walkingSteps: 8630, physicalExercise: [10, 0, 0, 0] },
        { id: 58, date: '2020-02-27', workTime: ['', '', 0], sleepTime: ['23:30', 7.75, 1.12], walkingSteps: 644, physicalExercise: [25, 0, 0, 0] },
        { id: 59, date: '2020-02-28', workTime: ['', '', 0], sleepTime: ['23:30', 8.15, 1.47], walkingSteps: 846, physicalExercise: [10, 0, 0, 0] },
        { id: 60, date: '2020-02-29', workTime: ['', '', 0], sleepTime: ['23:33', 8.73, 1.32], walkingSteps: 1171, physicalExercise: [10, 0, 0, 0] },
        { id: 61, date: '2020-03-01', workTime: ['', '', 0], sleepTime: ['23:47', 9.01, 1.32], walkingSteps: 16900, physicalExercise: [10, 0, 0, 0] },
        { id: 62, date: '2020-03-02', workTime: ['', '', 0], sleepTime: ['23:18', 8.93, 0.81], walkingSteps: 1390, physicalExercise: [10, 0, 0, 0] },
        { id: 63, date: '2020-03-03', workTime: ['', '', 0], sleepTime: ['23:21', 8.65, 1.21], walkingSteps: 1233, physicalExercise: [30, 0, 0, 0] },
        { id: 64, date: '2020-03-04', workTime: ['', '', 0], sleepTime: ['23:41', 8.05, 1.78], walkingSteps: 1467, physicalExercise: [10, 0, 0, 0] },
        { id: 65, date: '2020-03-05', workTime: ['', '', 0], sleepTime: ['23:30', 8.67, 1.13], walkingSteps: 2626, physicalExercise: [25, 0, 0, 0] },
        { id: 66, date: '2020-03-06', workTime: ['', '', 0], sleepTime: ['23:38', 7.85, 2.12], walkingSteps: 1546, physicalExercise: [25, 0, 0, 0] },
        { id: 67, date: '2020-03-07', workTime: ['', '', 0], sleepTime: ['23:37', 7.73, 1.88], walkingSteps: 1541, physicalExercise: [10, 0, 0, 0] },
        { id: 68, date: '2020-03-08', workTime: ['', '', 0], sleepTime: ['23:45', 9.13, 2.07], walkingSteps: 4439, physicalExercise: [10, 0, 0, 0] },
        { id: 69, date: '2020-03-09', workTime: ['', '', 0], sleepTime: ['23:50', 7.12, 0.88], walkingSteps: 1335, physicalExercise: [10, 0, 0, 0] },
        { id: 70, date: '2020-03-10', workTime: ['', '', 0], sleepTime: ['23:25', 9.08, 1.93], walkingSteps: 1580, physicalExercise: [20, 0, 0, 0] },
        { id: 71, date: '2020-03-11', workTime: ['', '', 0], sleepTime: ['23:38', 8.47, 1.72], walkingSteps: 5043, physicalExercise: [10, 0, 0, 0] },
        { id: 72, date: '2020-03-12', workTime: ['', '', 0], sleepTime: ['23:35', 8.00, 1.32], walkingSteps: 1669, physicalExercise: [10, 0, 0, 0] },
        { id: 73, date: '2020-03-13', workTime: ['', '', 0], sleepTime: ['23:37', 8.37, 2.13], walkingSteps: 0, physicalExercise: [10, 0, 0, 0] },

      ],
    },
  ]),
}
