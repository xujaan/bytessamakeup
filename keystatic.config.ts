import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    // Site Settings - Global configuration
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/siteSettings',
      format: 'json',
      schema: {
        brandName: fields.text({
          label: 'Brand Name',
          defaultValue: 'By Tessa Makeup',
        }),
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: 'Melayani dengan Hati',
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        favicon: fields.image({
          label: 'Favicon',
          directory: 'public',
          publicPath: '/',
        }),
        whatsappNumber: fields.text({
          label: 'WhatsApp Number',
          description: 'Format: 6281234567890',
          defaultValue: '6281234567890',
        }),
        whatsappMessage: fields.text({
          label: 'WhatsApp Message Template',
          defaultValue: 'Halo Kak Tessa, saya ingin konsultasi tentang makeup',
        }),
        instagramUrl: fields.url({
          label: 'Instagram URL',
          defaultValue: 'https://instagram.com/bytessamakeup',
        }),
        facebookUrl: fields.url({
          label: 'Facebook URL',
          defaultValue: 'https://facebook.com/bytessamakeup',
        }),
        location: fields.text({
          label: 'Location',
          defaultValue: 'Lumajang, Jawa Timur',
        }),
      },
    }),

    // Hero Section Content
    hero: singleton({
      label: 'Hero Section',
      path: 'src/content/hero',
      format: 'json',
      schema: {
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: 'Makeup Artist Lumajang',
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'Pesona Anggun',
        }),
        titleAccent: fields.text({
          label: 'Title Accent',
          defaultValue: 'di Hari Istimewa',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          defaultValue: 'Makeup Artist dengan sentuhan flawless yang tahan lama.\nMengubah momen bahagiamu menjadi kenangan abadi.',
        }),
        heroImage: fields.image({
          label: 'Hero Image (Portrait/Circle)',
          description: 'Main portrait image shown in the circle frame',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        backgroundImage: fields.image({
          label: 'Background Image',
          description: 'Full-width background image for the hero section',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        ctaPrimaryText: fields.text({
          label: 'Primary Button Text',
          defaultValue: 'Lihat Paket Wedding',
        }),
        ctaPrimaryLink: fields.text({
          label: 'Primary Button Link',
          defaultValue: '#services',
        }),
        ctaSecondaryText: fields.text({
          label: 'Secondary Button Text',
          defaultValue: 'Konsultasi Gratis',
        }),
        ctaSecondaryLink: fields.text({
          label: 'Secondary Button Link',
          defaultValue: '#contact',
        }),
      },
    }),

    // About Section Content
    about: singleton({
      label: 'About Section',
      path: 'src/content/about',
      format: 'json',
      schema: {
        label: fields.text({
          label: 'Section Label',
          defaultValue: 'Tentang Kami',
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'Sentuhan Personal',
        }),
        titleAccent: fields.text({
          label: 'Title Accent',
          defaultValue: 'untuk Anda',
        }),
        description1: fields.text({
          label: 'Description Paragraph 1',
          multiline: true,
          defaultValue: 'Setiap wajah memiliki ceritanya sendiri. Di By Tessa Makeup, kami tidak sekadar merias, tapi menonjolkan karakter terbaik Anda.',
        }),
        description2: fields.text({
          label: 'Description Paragraph 2',
          multiline: true,
          defaultValue: 'Melayani area Lumajang dan sekitarnya, kami memastikan hasil yang tidak hanya indah di kamera, tapi juga nyaman dan awet sepanjang acara.',
        }),
        aboutImage: fields.image({
          label: 'About Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        features: fields.array(
          fields.object({
            title: fields.text({ label: 'Feature Title' }),
            description: fields.text({ label: 'Feature Description' }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'Shield (Premium)', value: 'shield' },
                { label: 'Clock (Tahan Lama)', value: 'clock' },
                { label: 'Heart (Pelayanan)', value: 'heart' },
                { label: 'Star (Kualitas)', value: 'star' },
                { label: 'Check (Verified)', value: 'check' },
              ],
              defaultValue: 'shield',
            }),
          }),
          {
            label: 'Features',
            itemLabel: (props) => props.fields.title.value || 'Feature',
          }
        ),
      },
    }),

    // Footer Content
    footer: singleton({
      label: 'Footer Section',
      path: 'src/content/footer',
      format: 'json',
      schema: {
        ctaTitle: fields.text({
          label: 'CTA Title',
          defaultValue: 'Sudah Menentukan',
        }),
        ctaTitleAccent: fields.text({
          label: 'CTA Title Accent',
          defaultValue: 'Tanggal Cantikmu?',
        }),
        ctaDescription: fields.text({
          label: 'CTA Description',
          multiline: true,
          defaultValue: 'Jadwal untuk makeup wedding dan wisuda seringkali cepat terisi.\nMari amankan tanggalmu sekarang sebelum terlambat.',
        }),
        ctaButtonText: fields.text({
          label: 'CTA Button Text',
          defaultValue: 'Konsultasi via WhatsApp',
        }),
        bookingWhatsappMessage: fields.text({
          label: 'Booking WhatsApp Message',
          defaultValue: 'Halo Kak Tessa, saya ingin booking tanggal untuk makeup',
        }),
      },
    }),

    // Portfolio Section Config
    portfolioConfig: singleton({
      label: 'Portfolio Section Config',
      path: 'src/content/portfolioConfig',
      format: 'json',
      schema: {
        label: fields.text({
          label: 'Section Label',
          defaultValue: 'Portfolio',
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'Gallery of Roses',
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Bukti cinta kami — Kumpulan senyum bahagia dari klien By Tessa Makeup',
        }),
        instagramButtonText: fields.text({
          label: 'Instagram Button Text',
          defaultValue: 'Lihat Lebih Banyak di Instagram',
        }),
      },
    }),

    // Services Section Config
    servicesConfig: singleton({
      label: 'Services Section Config',
      path: 'src/content/servicesConfig',
      format: 'json',
      schema: {
        label: fields.text({
          label: 'Section Label',
          defaultValue: 'Layanan Kami',
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'The Royal Offerings',
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Pilihan paket makeup yang disesuaikan dengan kebutuhan acara istimewa Anda',
        }),
      },
    }),

    // Pricelist Section Config
    pricelistConfig: singleton({
      label: 'Pricelist Section Config  ',
      path: 'src/content/pricelistConfig',
      format: 'json',
      schema: {
        label: fields.text({
          label: 'Section Label',
          defaultValue: 'Investasi Kecantikan',
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'Pilihan Paket',
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Harga transparan untuk setiap momen spesialmu',
        }),
        note: fields.text({
          label: 'Note',
          defaultValue: 'Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terbaru.',
        }),
      },
    }),
  },

  collections: {
    // Services Collection
    services: collection({
      label: 'Services',
      slugField: 'id',
      path: 'src/content/services/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        category: fields.text({ label: 'Category' }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/services',
          publicPath: '/images/services/',
        }),
        order: fields.integer({
          label: 'Order',
          defaultValue: 0,
        }),
      },
    }),

    // Price Categories Collection
    priceCategories: collection({
      label: 'Price Categories',
      slugField: 'id',
      path: 'src/content/priceCategories/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        name: fields.text({ label: 'Category Name' }),
        description: fields.text({ label: 'Description' }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
        packages: fields.array(
          fields.object({
            name: fields.text({ label: 'Package Name' }),
            price: fields.text({ label: 'Price', description: 'e.g. 1.000.000' }),
            popular: fields.checkbox({ label: 'Popular', defaultValue: false }),
            features: fields.array(
              fields.text({ label: 'Feature' }),
              { label: 'Features', itemLabel: (props) => props.value || 'Feature' }
            ),
          }),
          {
            label: 'Packages',
            itemLabel: (props) => props.fields.name.value || 'Package',
          }
        ),
      },
    }),

    // Portfolio Items Collection
    portfolio: collection({
      label: 'Portfolio',
      slugField: 'id',
      path: 'src/content/portfolio/*',
      format: 'json',
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        type: fields.text({ label: 'Type' }),
        label: fields.text({ label: 'Label' }),
        size: fields.select({
          label: 'Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'small',
        }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/portfolio',
          publicPath: '/images/portfolio/',
        }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
      },
    }),
  },
});
