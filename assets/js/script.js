const app = Vue.createApp({
  data() {
    return {
      meta: {
        title: "",
        description: "",
        favicon: "",
      },

      appName: "",
      appLogo: "",

      hero: {
        backgrounds: {
          light: "",
          light2: "",
          dark: "",
        },
        title: "",
        subtitle: "",
        sliders: [
          {
            image: "",
            alt: "",
            lightImg: "",
            darkImg: "",
          },
          {
            image: "",
            alt: "",
            lightImg: "",
            darkImg: "",
          },
        ],
      },

      service: {
        title: "",
        subtitle: "",
        description: "",
        items: [
          {
            image: "",
            alt: "",
            title: "",
            description: "",
          },
          {
            image: "",
            alt: "",
            title: "",
            description: "",
          },
        ],
      },

      portofolio: {
        title: "",
        subtitle: "",
        description: "",
        items: [
          {
            image: "",
            alt: "",
            description: "",
            name: "",
          },
        ],
      },

      statistics: [
        {
          color: "",
          icon: "",
          data: "",
          description: "",
        },
      ],

      faq: {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        alt: "",
        items: [
          {
            question: "",
            answer: "",
          },
        ],
      },

      about: {
        title: "",
        description: "",
        image: "",
        alt: "",
      },

      webtrade: {
        title: "",
        subtitle: "",
        description: "",
      },

      contact_us: {
        title: "",
        subtitle: "",
        description: "",
      },

      footer: {
        description: "",
        url_appstore: "",
        url_playstore: "",
        copyright: {
          text: "",
          url: "",
        },
        socials: [
          {
            icon: "",
            url: "",
          },
        ],
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const baseUrl = window.location.origin;
        const response = await axios.get("data.json");
        const data = response.data;

        this.meta = {
          title: data.meta.title || "",
          description: data.meta.description || "",
          favicon: data.meta.favicon || "",
        };

        this.appName = data.appName || "";
        this.appLogo = data.appLogo || "";

        this.hero = {
          backgrounds: {
            light: data.hero.backgrounds.light || "",
            light2: data.hero.backgrounds.light2 || "",
            dark: data.hero.backgrounds.dark || "",
          },
          title: data.hero.title || "",
          subtitle: data.hero.subtitle || "",
          sliders: data.hero.sliders.map((slider) => ({
            image: slider.image || "",
            alt: slider.alt || "",
            lightImg: slider.lightImg || "",
            darkImg: slider.darkImg || "",
          })),
        };

        this.service = {
          title: data.service.title || "",
          subtitle: data.service.subtitle || "",
          description: data.service.description || "",
          items: data.service.items.map((item) => ({
            image: item.image || "",
            alt: item.alt || "",
            title: item.title || "",
            description: item.description || "",
          })),
        };

        this.portofolio = {
          title: data.portofolio.title || "",
          subtitle: data.portofolio.subtitle || "",
          description: data.portofolio.description || "",
          items: data.portofolio.items.map((item) => ({
            image: item.image || "",
            alt: item.alt || "",
            description: item.description || "",
            name: item.name || "",
          })),
        };

        this.statistics = data.statistics.map((stat) => ({
          color: stat.color || "",
          icon: stat.icon || "",
          data: stat.data || "",
          description: stat.description || "",
        }));

        this.faq = {
          title: data.faq.title || "",
          subtitle: data.faq.subtitle || "",
          description: data.faq.description || "",
          image: data.faq.image || "",
          alt: data.faq.alt || "",
          items: data.faq.items.map((item) => ({
            question: item.question || "",
            answer: item.answer || "",
          })),
        };

        this.about = {
          title: data.about.title || "",
          description: data.about.description || "",
          image: data.about.image || "",
          alt: data.about.alt || "",
        };

        this.webtrade = {
          title: data.webtrade.title || "",
          subtitle: data.webtrade.subtitle || "",
          description: data.webtrade.description || "",
        };

        this.contact_us = {
          title: data.contact_us.title || "",
          subtitle: data.contact_us.subtitle || "",
          description: data.contact_us.description || "",
        };

        this.footer = {
          description: data.footer.description || "",
          url_appstore: data.footer.url_appstore || "",
          url_playstore: data.footer.url_playstore || "",
          copyright: {
            text: data.footer.copyright.text || "",
            url: data.footer.copyright.url || "",
          },
          socials: data.footer.socials.map((social) => ({
            icon: social.icon || "",
            url: social.url || "",
          })),
        };

        document.title = this.meta.title;
        document.querySelector("link[rel='icon']").href = this.meta.favicon;
        document.querySelector("meta[name='description']").content =
          this.meta.description;

        this.initSwiper();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    sendInquiry() {
      alert(`Inquiry sent from ${this.contact.fullname}`);
      this.contact.fullname = "";
      this.contact.email = "";
      this.contact.message = "";
    },
    initSwiper() {
      // alert("Swiper initialized");
      /**
       * Main - Front Pages
       */
      "use strict";

      (function () {
        const swiperReviews = document.getElementById("swiper-reviews");

        if (swiperReviews) {
          new Swiper(swiperReviews, {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            loop: false,
            loopAdditionalSlides: 1,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              992: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            },
          });

          new Swiper(".swiper-hero-carousel", {
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            speed: 1000,
          });
        }
      })();
    },
  },
});

app.mount("#app");
