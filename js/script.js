/**
 * CHICKIES Digital Menu - Main JavaScript
 * All functionality: dynamic content, cart system, filtering, search,
 * WhatsApp integration, animations, and localStorage persistence.
 */

(function() {
  'use strict';

  // ============================================================
  // DATA
  // ============================================================

  /**
   * Categories data - Easy to edit
   * Add/remove categories as needed
   */
  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'burgers', name: 'ميكس كريبات' },
    { id: 'crepes', name: 'الكريبات' },
    { id: 'syrian', name: 'أكلات سورية' },
    { id: 'chicken', name: 'الساندوتشات' },
    // { id: 'pizza', name: 'بيتزا' },
    { id: 'drinks', name: 'كريب الحلو' },
    { id: 'fast', name: ' الاضافات' },
    { id: 'mokabl', name: ' المقبلات' }
  ];

  /**
   * Menu items data - Easy to edit
   * Add/remove items as needed
   * category must match one of the category IDs above
   */
  const menuItems = [
    {
      id: 1,
      name: ' بانيه بطاطس صغير',
      description: 'بانيه فريش مع بطاطس',
      price: 90,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس صغير.jpeg'
    },
    {
      id: 2,
      name: ' بانيه بطاطس وسط',
      description: 'بانيه فريش مع بطاطس',
      price: 100,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس وسط.jpeg'
    },
    {
      id: 3,
      name: ' بانيه بطاطس كبير',
      description: 'بانيه فريش مع بطاطس',
      price: 110,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس كبير.jpeg'
    },

    {
      id: 4,
      name: 'استريبس بطاطس صغير',
      description: '',
      price: 110,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس صغير.jpeg'
    },
    {
      id: 5,
      name: 'استريبس بطاطس وسط',
      description: '',
      price: 120,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس وسط.jpeg'
    },
    {
      id: 6,
      name: 'استريبس بطاطس كبير',
      description: '',
      price: 130,
      category: 'burgers',
      image: 'images/food/بانيه بطاطس كبير.jpeg'
    },
    {
      id: 7,
      name: 'شيش بطاطس صغير',
      description: '',
      price: 115,
      category: 'burgers',
      image: 'images/food/شيش بطاطس صغير.jpeg'
    },
    {
      id: 8,
      name: 'شيش بطاطس وسط',
      description: '',
      price: 130,
      category: 'burgers',
      image: 'images/food/شيش بطاطس وسط.jpeg'
    },
    {
      id: 9,
      name: 'شيش بطاطس كبير',
      description: '',
      price: 140,
      category: 'burgers',
      image: 'images/food/شيش بطاطس كبير.jpeg'
    },
    {
      id: 10,
      name: 'شيش استريبس صغير',
      description: '',
      price: 120,
      category: 'burgers',
      image: 'images/food/شيش استريبس صغير.jpeg'
    },
    {
      id: 11,
      name: 'شيش استريبس وسط',
      description: '',
      price: 130,
      category: 'burgers',
      image: 'images/food/شيش استريبس وسط.jpeg'
    },
    {
      id: 12,
      name: 'شيش استريبس كبير',
      description: '',
      price: 140,
      category: 'burgers',
      image: 'images/food/شيش استريبس كبير.jpeg'
    },
    {
      id: 13,
      name: 'استريبس وشيش وبانيه صغير',
      description: '',
      price: 120,
      category: 'burgers',
      image: 'images/food/استريبس وشيش وبانيه صغير.jpeg'
    },
    {
      id: 14,
      name: 'استريبس وشيش وبانيه وسط',
      description: 'سموثي مانجو طبيعي سائق مع حليب مخفوق وشريحة مانجو طازجة',
      price: 130,
      category: 'burgers',
      image: 'images/food/استريبس وشيش وبانيه وسط.jpeg'
    },
    {
      id: 15,
      name: 'استريبس وشيش وبانيه كبير',
      description: '',
      price: 140,
      category: 'burgers',
      image: 'images/food/استريبس وشيش وبانيه كبير.jpeg'
    },
    {
      id: 16,
      name: 'ميكس فراخ صغير',
      description: '',
      price: 120,
      category: 'burgers',
      image: 'images/food/ميكس فراخ صغير.jpeg'
    },
    {
      id: 17,
      name: 'ميكس فراخ وسط',
      description: '',
      price: 130,
      category: 'burgers',
      image: 'images/food/ميكس فراخ وسط.jpeg'
    },
    {
      id: 18,
      name: 'ميكس فراخ كبير',
      description: '',
      price: 140,
      category: 'burgers',
      image: 'images/food/ميكس فراخ كبير.png'
    },
    {
      id: 19,
      name: 'ميكس لحوم صغير',
      description: '',
      price: 120,
      category: 'burgers',
      image: 'images/food/ميكس لحوم صغير.png'
    },
    {
      id: 20,
      name: 'ميكس لحوم وسط',
      description: '',
      price: 130,
      category: 'burgers',
      image: 'images/food/ميكس لحوم وسط.jpeg'
    },
    {
      id: 21,
      name: 'ميكس لحوم كبير',
      description: '',
      price: 140,
      category: 'burgers',
      image: 'images/food/ميكس لحوم كبير.png'
    },
    {
      id: 22,
      name: 'ميكس حلال صغير',
      description: '',
      price: 160,
      category: 'burgers',
      image: 'images/food/'
    },
    {
      id: 23,
      name: 'ميكس حلال كبير',
      description: '',
      price: 260,
      category: 'burgers',
      image: 'images/food/'
    },
    {
      id: 24,
      name: 'كريب بطاطس صغير',
      description: '',
      price: 55,
      category: 'crepes',
      image: 'images/food/كريب بطاطس صغير.jpeg'
    },
    {
      id: 25,
      name: 'كريب بطاطس وسط',
      description: '',
      price: 65,
      category: 'crepes',
      image: 'images/food/كريب بطاطس وسط.jpeg'
    },
    {
      id: 26,
      name: 'كريب بطاطس كبير',
      description: '',
      price: 75,
      category: 'crepes',
      image: 'images/food/كريب بطاطس كبير.jpeg'
    },
    {
      id: 27,
      name: 'كريب بانيه صغير',
      description: '',
      price: 80,
      category: 'crepes',
      image: 'images/food/كريب بانيه صغير.jpeg'
    },
    {
      id: 28,
      name: 'كريب بانيه وسط',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/كريب بانيه وسط.jpeg'
    },
    {
      id: 29,
      name: 'كريب بانيه كبير',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/كريب بانيه كبير.jpeg'
    },
    {
      id: 30,
      name: 'كريب كريسبي صغير',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/كريسبي صغير.jpeg'
    },
    {
      id: 31,
      name: 'كريب كريسبي وسط',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/كريسبي وسط.jpeg'
    },
    {
      id: 32,
      name: 'كريب كريسبي كبير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/كريسبي كبير.jpeg'
    },
    {
      id: 33,
      name: 'كريب بانيه بلدي صغير',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/بانيه بلدي صغير.jpeg'
    },
    {
      id: 34,
      name: 'كريب بانيه بلدي وسط',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/بانيه بلدي وسط.jpeg'
    },
    {
      id: 35,
      name: 'كريب بانيه بلدي كبير',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/بانيه بلدي كبير.jpeg'
    },
    {
      id: 36,
      name: 'كريب استريبس صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/استريبس صغير.jpeg'
    },
    {
      id: 37,
      name: 'كريب استريبس وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/استريبس وسط.jpeg'
    },
    {
      id: 38,
      name: 'كريب استريبس كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/استريبس كبير.jpeg'
    },
    {
      id: 39,
      name: 'كريب سوبر كرانشي صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/سوبر كرانشي صغير.jpeg'
    },
    {
      id: 40,
      name: 'كريب سوبر كرانشي وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/سوبر كرانشي وسط.jpeg'
    },
    {
      id: 41,
      name: 'كريب سوبر كرانشي كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/سوبر كرانشي كبير.jpeg'
    },
    {
      id: 42,
      name: 'كريب زنجر صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/كريب زنجر صغير.jpeg'
    },
    {
      id: 43,
      name: 'كريب زنجر وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/كريب زنجر وسط.png'
    },
    {
      id: 44,
      name: 'كريب زنجر كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/كريب زنجر كبير.jpeg'
    },
    {
      id: 45,
      name: 'كريب كوردن بلو صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/كريب كوردن بلو.jpeg'
    },
    {
      id: 46,
      name: 'كريب كوردن بلو وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/كريب كوردن بلو.jpeg'
    },
    {
      id: 47,
      name: 'كريب كوردن بلو كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/كريب كوردن بلو.jpeg'
    },
    {
      id: 48,
      name: 'كريب شيش طاووق صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/شيش طاووق صغير ووسط.jpeg'
    },
    {
      id: 49,
      name: 'كريب شيش طاووق وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/شيش طاووق صغير ووسط.jpeg'
    },
    {
      id: 50,
      name: 'كريب شيش طاووق كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/شيش طاووق كبير.jpeg'
    },
    {
      id: 51,
      name: 'كريب شاورما فراخ صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/شاورما فراخ صغير.jpeg'
    },
    {
      id: 52,
      name: 'كريب شاورما فراخ وسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/شاورما فراخ كبير ووسط.jpeg'
    },
    {
      id: 53,
      name: 'كريب شاورما فراخ كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/شاورما فراخ كبير ووسط.jpeg'
    },
    {
      id: 54,
      name: 'كريب فاهيتا صغير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/فاهيتا.jpeg'
    },
    {
      id: 55,
      name: 'كريب فاهيتاوسط',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/فاهيتا.jpeg'
    },
    {
      id: 56,
      name: 'كريب فاهيتا كبير',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/فاهيتا.jpeg'
    },
    {
      id: 57,
      name: 'كريب برجر لحمه صغير',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/برجر لحمه.jpeg'
    },
    {
      id: 58,
      name: 'كريب برجر لحمه وسط',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/برجر لحمه.jpeg'
    },
    {
      id: 59,
      name: 'كريب برجر لحمه كبير',
      description: '',
      price: 110,
      category: 'crepes',
      image: 'images/food/برجر لحمه.jpeg'
    },
    {
      id: 60,
      name: 'كريب كفته صغير',
      description: '',
      price: 80,
      category: 'crepes',
      image: 'images/food/كفته.jpeg'
    },
    {
      id: 61,
      name: 'كريب كفته وسط',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/كفته.jpeg'
    },
    {
      id: 62,
      name: 'كريب كفته كبير',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/كفته.jpeg'
    },
    {
      id: 63,
      name: 'كريب سجق صغير',
      description: '',
      price: 80,
      category: 'crepes',
      image: 'images/food/سجق.jpeg'
    },
    {
      id: 64,
      name: 'كريب سجق وسط',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/سجق.jpeg'
    },
    {
      id: 65,
      name: 'كريب سجق كبير',
      description: '',
      price: 100,
      category: 'crepes',
      image: 'images/food/سجق.jpeg'
    },
    {
      id: 66,
      name: 'كريب سوسيس صغير',
      description: '',
      price: 70,
      category: 'crepes',
      image: 'images/food/سوسيس.jpeg'
    },
    {
      id: 67,
      name: 'كريب سوسيس وسط',
      description: '',
      price: 80,
      category: 'crepes',
      image: 'images/food/سوسيس.jpeg'
    },
    {
      id: 68,
      name: 'كريب سوسيس كبير',
      description: '',
      price: 90,
      category: 'crepes',
      image: 'images/food/سوسيس.jpeg'
    },
    {
      id: 69,
      name: 'كريب شاورما لحمه صغير',
      description: '',
      price: 120,
      category: 'crepes',
      image: 'images/food/شاورما لحمه.jpeg'
    },
    {
      id: 70,
      name: 'كريب شاورما لحمه وسط',
      description: '',
      price: 130,
      category: 'crepes',
      image: 'images/food/شاورما لحمه.jpeg'
    },
    {
      id: 71,
      name: 'كريب شاورما لحمه كبير',
      description: '',
      price: 140,
      category: 'crepes',
      image: 'images/food/شاورما لحمه.jpeg'
    },
    {
      id: 72,
      name: 'كريب نوتيلا',
      description: '',
      price: 60,
      category: 'drinks',
      image: 'images/food/نوتيلا.png'
    },
    {
      id: 73,
      name: 'كريب نوتيلا موز',
      description: '',
      price: 70,
      category: 'drinks',
      image: 'images/food/نوتيلا موز.png'
    },
    {
      id: 74,
      name: 'كريب نوتيلا هوهوز',
      description: '',
      price: 70,
      category: 'drinks',
      image: 'images/food/نوتيلا هوهوز.png'
    },
    {
      id: 75,
      name: 'كريب نوتيلا بندق',
      description: '',
      price: 80,
      category: 'drinks',
      image: 'images/food/نوتيلا بندق.png'
    },
    {
      id: 76,
      name: 'باكيت بطاطس صغير',
      description: '',
      price: 30,
      category: 'mokabl',
      image: 'images/food/بطاطس.jpg'
    },
    {
      id: 77,
      name: 'باكيت بطاطس وسط',
      description: '',
      price: 40,
      category: 'mokabl',
      image: 'images/food/بطاطس.jpg'
    },
    {
      id: 78,
      name: 'باكيت بطاطس كبير',
      description: '',
      price: 50,
      category: 'mokabl',
      image: 'images/food/بطاطس.jpg'
    },
    {
      id: 79,
      name: 'طبق مخلل',
      description: '',
      price: 20,
      category: 'mokabl',
      image: 'images/food/مخلل.jpg'
    },
    {
      id: 80,
      name: 'كاتشب',
      description: '',
      price: 20,
      category: 'mokabl',
      image: 'images/food/كاتشب.jpg'
    },
    {
      id: 81,
      name: 'مايونيز',
      description: '',
      price: 20,
      category: 'mokabl',
      image: 'images/food/مايونيز.jpg'
    },
    {
      id: 82,
      name: 'بطاطس شيدر',
      description: '',
      price: 60,
      category: 'mokabl',
      image: 'images/food/بطاطس شيدر.jpg'
    },
    {
      id: 83,
      name: 'مقبلات حلال',
      description: 'استريبس+خضار+جبنه+بطاطس',
      price: 80,
      category: 'mokabl',
      image: 'images/food/مقبلات حلال.jpeg'
    },
    {
      id: 84,
      name: 'فرنساوي بانيه فريش',
      description: '',
      price: 60,
      category: 'chicken',
      image: 'images/food/بانيه فريش ساندوتش.jpg'
    },
    {
      id: 85,
      name: 'فرنساوي بانيه عادي',
      description: '',
      price: 40,
      category: 'chicken',
      image: 'images/food/بانيه عادي فرنساوي.jpg'
    },
    {
      id: 86,
      name: 'فرنساوي كريسبي او استريبس',
      description: '',
      price: 60,
      category: 'chicken',
      image: 'images/food/كريسبي او استريبس فرنساوي.jpg'
    },
    {
      id: 87,
      name: 'فرنساوي فاهيتا',
      description: '',
      price: 60,
      category: 'chicken',
      image: 'images/food/فاهيتا فرنساوي.jpg'
    },
    {
      id: 88,
      name: 'فرنساوي بطاطس',
      description: '',
      price: 30,
      category: 'chicken',
      image: 'images/food/بطاطس فرنساوي.png'
    },
    {
      id: 89,
      name: 'فرنساوي كبده',
      description: '',
      price: 35,
      category: 'chicken',
      image: 'images/food/كبده فرنساوي.jpg'
    },
    {
      id: 90,
      name: 'فرنساوي سجق',
      description: '',
      price: 40,
      category: 'chicken',
      image: 'images/food/سجق فرنساوي.jpg'
    },
    {
      id: 91,
      name: 'فرنساوي كوردن بلو',
      description: '',
      price: 60,
      category: 'chicken',
      image: 'images/food/كوردن بلو فرنساوي.png'
    },
    {
      id: 92,
      name: 'فرنساوي شاورما فراخ',
      description: '',
      price: 65,
      category: 'chicken',
      image: 'images/food/شاورما فراخ فرنساوي.jpg'
    },






  ];

  // WhatsApp phone number - Change this to your number
  const WHATSAPP_NUMBER = '201023266160';

  // ============================================================
  // DOM ELEMENTS
  // ============================================================

  const els = {
    loadingScreen: document.getElementById('loading-screen'),
    header: document.getElementById('header'),
    categoriesGrid: document.getElementById('categories-grid'),
    filterPills: document.getElementById('filter-pills'),
    menuGrid: document.getElementById('menu-grid'),
    searchInput: document.getElementById('search-input'),
    noResults: document.getElementById('no-results'),
    cartToggle: document.getElementById('cart-toggle'),
    cartBadge: document.getElementById('cart-badge'),
    cartSidebar: document.getElementById('cart-sidebar'),
    cartBackdrop: document.getElementById('cart-backdrop'),
    cartClose: document.getElementById('cart-close'),
    cartBody: document.getElementById('cart-body'),
    cartFooter: document.getElementById('cart-footer'),
    cartTotal: document.getElementById('cart-total'),
    whatsappOrderBtn: document.getElementById('whatsapp-order-btn'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    floatingWhatsapp: document.getElementById('floating-whatsapp'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
  };

  // ============================================================
  // STATE
  // ============================================================

  let currentCategory = 'all';
  let searchQuery = '';
  let toastTimeout = null;

  // ============================================================
  // CART SYSTEM
  // ============================================================

  const cart = {
    items: [], // { id, quantity }

    /** Load cart from localStorage */
    load() {
      try {
        const saved = localStorage.getItem('chickies_cart');
        if (saved) {
          this.items = JSON.parse(saved);
        }
      } catch (e) {
        console.warn('Failed to load cart from localStorage:', e);
        this.items = [];
      }
    },

    /** Save cart to localStorage */
    save() {
      try {
        localStorage.setItem('chickies_cart', JSON.stringify(this.items));
      } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
      }
    },

    /** Add item to cart */
    add(itemId) {
      const existing = this.items.find(i => i.id === itemId);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ id: itemId, quantity: 1 });
      }
      this.save();
      this.updateUI();
    },

    /** Remove item from cart */
    remove(itemId) {
      this.items = this.items.filter(i => i.id !== itemId);
      this.save();
      this.updateUI();
    },

    /** Update item quantity by delta (+1 or -1) */
    updateQuantity(itemId, delta) {
      const item = this.items.find(i => i.id === itemId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          this.remove(itemId);
        } else {
          this.save();
          this.updateUI();
        }
      }
    },

    /** Get total price */
    getTotal() {
      return this.items.reduce((sum, item) => {
        const menuItem = menuItems.find(m => m.id === item.id);
        return sum + (menuItem ? menuItem.price * item.quantity : 0);
      }, 0);
    },

    /** Get total item count */
    getCount() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    /** Get cart item by ID */
    getItem(itemId) {
      return this.items.find(i => i.id === itemId);
    },

    /** Clear entire cart */
    clear() {
      this.items = [];
      this.save();
      this.updateUI();
    },

    /** Update all cart UI elements */
    updateUI() {
      const count = this.getCount();
      const total = this.getTotal();

      // Update badge
      if (count > 0) {
        els.cartBadge.textContent = count;
        els.cartBadge.classList.remove('hidden');
        els.cartBadge.classList.add('pulse');
        setTimeout(() => els.cartBadge.classList.remove('pulse'), 400);
      } else {
        els.cartBadge.classList.add('hidden');
      }

      // Update cart body
      this.renderCartItems();

      // Update total
      els.cartTotal.textContent = total + ' \u062c.\u0645';

      // Show/hide footer based on items
      if (this.items.length > 0) {
        els.cartFooter.classList.remove('hidden');
      } else {
        els.cartFooter.classList.add('hidden');
      }

      // Update WhatsApp links
      updateWhatsAppLinks("https://chat.whatsapp.com/6JQb7IVSVoA8r34RHxgIsf?mode=gi_t");
    },

    /** Render cart items in sidebar */
    renderCartItems() {
      if (this.items.length === 0) {
        els.cartBody.innerHTML = `
          <div class="cart-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>السلة فارغة</p>
            <span>ابدأ بإضافة عناصر من القائمة</span>
            <button class="btn-browse" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'}); closeCart();">تصفح القائمة</button>
          </div>
        `;
        return;
      }

      els.cartBody.innerHTML = this.items.map(item => {
        const menuItem = menuItems.find(m => m.id === item.id);
        if (!menuItem) return '';
        return `
          <div class="cart-item" data-cart-id="${item.id}">
            <div class="cart-item-image">
              <img src="${menuItem.image}" alt="${menuItem.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${menuItem.name}</div>
              <div class="cart-item-price">${menuItem.price * item.quantity} \u062c.\u0645</div>
            </div>
            <div class="cart-item-actions">
              <div class="cart-item-qty">
                <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, -1)" aria-label="تقليل">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M5 12h14"/>
                  </svg>
                </button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="cart.add(${item.id})" aria-label="زيادة">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
              <button class="cart-item-remove" onclick="cart.remove(${item.id})" aria-label="إزالة">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  };

  // ============================================================
  // RENDERING FUNCTIONS
  // ============================================================

  /** Render category cards */
  function renderCategories() {
    // Skip 'all' category for cards
    const displayCategories = categories.filter(c => c.id !== 'all');
    
    els.categoriesGrid.innerHTML = displayCategories.map((cat, index) => `
      <div class="category-card stagger-children" 
           data-animate 
           data-category="${cat.id}" 
           onclick="filterByCategory('${cat.id}')"
           style="transition-delay: ${index * 0.08}s">
        <img src="images/categories/${cat.id}.jpg" alt="${cat.name}" loading="lazy">
        <div class="category-card-overlay">
          <span class="category-card-name">${cat.name}</span>
        </div>
      </div>
    `).join('');
  }

  /** Render filter pills */
  function renderFilterPills() {
    els.filterPills.innerHTML = categories.map((cat, index) => `
      <button class="filter-pill stagger-children ${cat.id === currentCategory ? 'active' : ''}" 
              data-pill="${cat.id}" 
              onclick="filterByCategory('${cat.id}')"
              style="transition-delay: ${index * 0.05}s">
        ${cat.name}
      </button>
    `).join('');
  }

  /** Render menu items based on current filter */
  function renderMenuItems() {
    let filtered = menuItems;

    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q)
      );
    }

    // Show/hide no results message
    if (filtered.length === 0) {
      els.menuGrid.classList.add('hidden');
      els.noResults.classList.remove('hidden');
    } else {
      els.menuGrid.classList.remove('hidden');
      els.noResults.classList.add('hidden');

      els.menuGrid.innerHTML = filtered.map((item, index) => `
        <div class="menu-card stagger-children" data-animate style="transition-delay: ${(index % 6) * 0.08}s">
          <div class="menu-card-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="menu-card-content">
            <h3 class="menu-card-name">${item.name}</h3>
            <p class="menu-card-desc">${item.description}</p>
            <div class="menu-card-footer">
              <span class="menu-card-price">
                <span class="currency">\u062c.\u0645</span>${item.price}
              </span>
              <button class="menu-card-add" onclick="cart.add(${item.id})" aria-label="إضافة ${item.name} إلى السلة">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Re-initialize scroll animations for new elements
    setTimeout(initScrollAnimations, 50);
  }

  // ============================================================
  // FILTERING & SEARCH
  // ============================================================

  /** Filter by category */
  function filterByCategory(categoryId) {
    currentCategory = categoryId;
    renderFilterPills();
    renderMenuItems();
    showToast(`تم التصفيح: ${categories.find(c => c.id === categoryId)?.name || ''}`);
  }
  // Expose to global scope for onclick handlers
  window.filterByCategory = filterByCategory;

  /** Search handler with debounce */
  let searchDebounce;
  function handleSearch(e) {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      searchQuery = e.target.value;
      renderMenuItems();
    }, 300);
  }

  // ============================================================
  // CART UI
  // ============================================================

  /** Open cart sidebar */
  function openCart() {
    els.cartSidebar.classList.add('open');
    els.cartBackdrop.classList.add('active');
    els.cartToggle.setAttribute('aria-expanded', 'true');
    els.cartSidebar.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  }

  /** Close cart sidebar */
  function closeCart() {
    els.cartSidebar.classList.remove('open');
    els.cartBackdrop.classList.remove('active');
    els.cartToggle.setAttribute('aria-expanded', 'false');
    els.cartSidebar.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
  }
  // Expose to global scope
  window.closeCart = closeCart;

  // ============================================================
  // WHATSAPP INTEGRATION
  // ============================================================

  /** Generate WhatsApp order message */
  function generateWhatsAppMessage() {
    if (cart.items.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('*طلب جديد من CHICKIES*\n\nأريد الطلب من القائمة')}`;
    }

    let message = '*طلب جديد من CHICKIES*\n';
    message += '════════════════\n\n';
    message += '*تفاصيل الطلب:*\n\n';

    cart.items.forEach(item => {
      const menuItem = menuItems.find(m => m.id === item.id);
      if (menuItem) {
        message += `• *${menuItem.name}*\n`;
        message += `  الكمية: ${item.quantity}\n`;
        message += `  السعر: ${menuItem.price * item.quantity} \u062c.م\n\n`;
      }
    });

    message += '════════════════\n';
    message += `*المجموع: ${cart.getTotal()} \u062c.م*`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  /** Update all WhatsApp button links */
  function updateWhatsAppLinks() {
    const url = generateWhatsAppMessage();
    els.whatsappOrderBtn.href = url;
    els.floatingWhatsapp.href = url;
  }

  // ============================================================
  // TOAST NOTIFICATIONS
  // ============================================================

  /** Show toast message */
  function showToast(message) {
    els.toastMessage.textContent = message;
    els.toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      els.toast.classList.remove('show');
    }, 2500);
  }

  // ============================================================
  // SCROLL ANIMATIONS
  // ============================================================

  /** Initialize IntersectionObserver for scroll animations */
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-animate]:not(.is-visible)').forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================================
  // HEADER SCROLL EFFECT
  // ============================================================

  /** Handle header background on scroll */
  function handleHeaderScroll() {
    if (window.scrollY > 100) {
      els.header.classList.add('scrolled');
    } else {
      els.header.classList.remove('scrolled');
    }
  }

  // ============================================================
  // LOADING SCREEN
  // ============================================================

  /** Hide loading screen */
  function hideLoadingScreen() {
    setTimeout(() => {
      els.loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        els.loadingScreen.style.display = 'none';
      }, 500);
    }, 1500); // Minimum display time
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  function bindEvents() {
    // Cart toggle
    els.cartToggle.addEventListener('click', openCart);

    // Cart close
    els.cartClose.addEventListener('click', closeCart);

    // Backdrop click to close
    els.cartBackdrop.addEventListener('click', closeCart);

    // Clear cart
    els.clearCartBtn.addEventListener('click', () => {
      if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
        cart.clear();
        showToast('تم إفراغ السلة');
      }
    });

    // Search input
    els.searchInput.addEventListener('input', handleSearch);

    // Header scroll
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Keyboard: Escape to close cart
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    });

    // Expose cart to global scope for onclick handlers
    window.cart = cart;
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    // Load cart from localStorage
    cart.load();

    // Render all content
    renderCategories();
    renderFilterPills();
    renderMenuItems();

    // Update cart UI
    cart.updateUI();

    // Initialize scroll animations
    initScrollAnimations();

    // Bind all events
    bindEvents();

    // Handle loading screen
    if (document.readyState === 'complete') {
      hideLoadingScreen();
    } else {
      window.addEventListener('load', hideLoadingScreen);
    }

    // Trigger hero animations
    setTimeout(() => {
      document.querySelectorAll('.hero [data-animate], .hero-logo').forEach(el => {
        el.classList.add('is-visible');
      });
    }, 100);
  }

  // Start the app
  init();

})();
