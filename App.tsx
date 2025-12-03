import React, { useState } from 'react';
import { Header } from './components/Header';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 transition-colors duration-300">
      
      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-300" onClick={() => setShowAbout(false)}>
          <div 
            className="relative w-full max-w-lg p-8 md:p-10 rounded-3xl bg-primary/95 dark:bg-primary-dark/95 text-white shadow-2xl backdrop-blur-md border border-white/20 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowAbout(false)} 
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-1"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            
            <div className="flex flex-col gap-6 text-center">
              <div className="mx-auto bg-white/20 p-4 rounded-full shadow-inner">
                <span className="material-symbols-outlined text-5xl text-white">info</span>
              </div>
              
              <h3 className="text-3xl font-bold tracking-tight">Hakkında</h3>
              
              <div className="w-16 h-1 bg-white/40 mx-auto rounded-full"></div>

              <p className="text-lg leading-relaxed font-medium text-white/95">
                Bu uygulama, geleneksel Bafra zembilini dijital ortama aktararak, kullanıcıların bu kültürel mirası keşfetmesini sağlar. Hedef kitlemiz, Bafra zembili hakkında bilgi edinmek isteyen herkes olup, uygulamamız, bu geleneksel el sanatını modern teknolojiyle buluşturur.
              </p>
              
              <button 
                onClick={() => setShowAbout(false)}
                className="mt-4 w-full py-3 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg"
              >
                Keşfetmeye Devam Et
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="layout-container flex h-full grow flex-col">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-10 lg:px-20">
          <div className="layout-content-container flex flex-col flex-1">
            
            <Header onOpenAbout={() => setShowAbout(true)} />

            {/* Hero Section */}
            <div className="py-20 md:py-28">
              <div className="flex flex-col gap-6 text-center animate-in fade-in duration-700 slide-in-from-bottom-4">
                <div className="flex justify-center mb-2">
                  <span className="bg-secondary/20 dark:bg-primary/20 text-primary-dark dark:text-secondary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-transparent dark:border-primary/30">
                    TÜBİTAK 2204-A Projesi
                  </span>
                </div>
                <h1 className="text-5xl font-bold leading-tight tracking-tighter text-text-main dark:text-white md:text-7xl">
                  ZembiLab
                </h1>
                <h2 className="text-xl font-medium leading-normal text-text-main/80 dark:text-gray-300 md:text-2xl">
                  Doğadan Dijitale Zembil Laboratuvarı.
                </h2>
                <p className="text-md mx-auto max-w-xl text-text-main/70 dark:text-gray-400 md:text-lg">
                  Bafra Zembili'nin asırlık üretim bilgisini, doğanın renkleri ve yapay zeka ile geleceğe taşıyoruz.
                </p>
                <div className="mt-6 flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                    <span className="truncate">Laboratuvarı Keşfet</span>
                  </button>
                </div>
              </div>
            </div>

            {/* AI Assistant Section */}
            <div className="py-10 md:py-16">
              <AiAssistant />
            </div>

            {/* Academy Section */}
            <div className="flex flex-col gap-10 py-10 md:py-16 @container">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">
                  Zembil Akademi
                </h2>
                <p className="text-md mx-auto max-w-2xl text-text-main/60 dark:text-gray-400 md:text-lg">
                  Bafra Zembili'nin zengin tarihini, yapım tekniklerini ve kültürel önemini keşfedin.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  { icon: 'history_edu', title: 'Zembil Nedir?', desc: 'Bafra\'nın asırlık geleneği olan zembil, hasır otundan örülen bir el sanatı ürünüdür.' },
                  { icon: 'construction', title: 'Nasıl Yapılır?', desc: 'Toplanan hasır otları kurutulur, ıslatılır ve geleneksel örme teknikleriyle zembile dönüştürülür.' },
                  { icon: 'diversity_3', title: 'Neden Önemli?', desc: 'Bu sanat, kuşaklar arası aktarılan bir kültürel miras ve toplumsal belleğin bir parçasıdır.' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-1 flex-col gap-4 rounded-xl border border-secondary/20 dark:border-white/10 bg-accent/50 dark:bg-surface-dark p-6 text-left hover:bg-secondary/10 dark:hover:bg-surface-light-dark transition-colors cursor-default shadow-sm hover:shadow-md">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-white dark:bg-white/10 text-primary dark:text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold leading-tight text-text-main dark:text-white">{item.title}</h3>
                      <p className="text-base font-normal leading-normal text-text-main/70 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-col gap-10 py-10 md:py-16">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">
                  Doğal Dokular & Desenler
                </h2>
                <p className="text-md mx-auto max-w-2xl text-text-main/60 dark:text-gray-400 md:text-lg">
                  Geleneksel ve modern zembil tasarımlarından oluşan ilham verici bir galeri.
                </p>
              </div>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXz5bK7kKx00jwToXfxv8CIUBPHYg09eykPiyiyLTZgdGRgzJxscWqrgtfpmmCHiwRu8oMWK1OsnmUvVzVRHlOr8dyIWpy_y0wppSuNySUU6mjciNMIuSlR1i24VRRwb6PG99kdj-sZbD7mPozRTOl1QTgb4Z_F3xr9LzFKWLBtk8b_oGFYhOuvvA6Z9-sxewJgo_9D7wikR2f1sBIlOfTcG-ZvFxouP5nHzG6gEAM6RCFEDEifGibRDeUSh6LH-JQoTwY71XF6_w",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZPjTPyjEGj8edvNrUuZWG1IVk30gHjSt6paalA6uLqdARqwOxHiUXSadudIX2tkovtu1FE-M_ry_jywfj15Jehg71b7JhRneiK-oNC7OBrudMcoMKVGjsAPTDPgDfDfP8P5BUFq4Fd8XxXgoPWW9TZ92_A-rk5at9uI7W4jtTjkdt1z893JN-vxsVACRCRdQ5t0lLjgoPQjANoTk-WwAcygR5cBSN5FBhbuefG-QsMFqpXA7KP9Cf7a60Z1djADZK0SGToaxnYtI",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGLjtJhChqxuYLvEMzWOeXLNyiVDObCe-XjxRD9wBR9cz5JZ8F-EIgZMz1OBuuZfkOvnse2iiz30vDsDzDYlEMfm0A7mLhQrlAeT_FOExtM5ViAS3JIETr64FBKcIRvIwapMrDwDLcZvXM6itVgywBKg0uryzAbRssCAFY37_CRHnPPvCSalhpvc8SWotziFDo6SWOmvNMFpoJosHM2VIg4SvCl3jZVFsemy9rGnEM7mqCZ6_ACaNHa_s3b8-qSPdfNTKwKJEIXmw",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6BGmO0M4v2J8gQUelvlijoLgxb4LvVKG7X2bJYYsafodxj5DV-l7McaYpTR8rdb0KiEZKCdFuLkcrCgLI9qkTEOWndYmew-QUP2kmswu-DtER4Ny2kl69vYIzuG9LDMFwTKmDO0ojG62k-8GiklUuTMsfzRHTxJ2dptu4pclXqiyomQg6uYgMZFflHOLflDQol99y5ehbBFFslevvW-Us98cQga5WefUtuVuDPtRUTq03R3YUNDR8QxJhQ2IkbdYMIpaO9OdVOg0",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhDLifURM-NzTEwDE8KZRT078EkQpMiEM06QGzo9afQ-lLblkwP6ngfIxcoqwiS4ctCv7fmVR-NdXSUNq2gim6PDMa-U53COC86RzsRlKh5DxHOxUpYRk37sbvGMJMOJ8qpSkB6ynMEnbOgd2CL3ILZmRuhR6z_Z1bZ_HeKCZhRqf7UDyrvGpHbeoLNuSQIPAVh0D_T399c_Rn_8iMiSW5PO_91Tw6oMR1iAHPkwKUw7cv3dQjh1jffzcI57ZZQbG74bKSNPv_K6g",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIPV8P_jPrU1VXAWuKTmCchJ7IrGJpc3Eoh1JkdSVK7lAAnAN0HWb-LS4xG1fJ-MRrqw4VOOJebkzE08uYpX_Bmrpkm34QYo_NjJ0I_jlfRMzlwF6AReThzfoIbKIb7ewzQvVsVoi9AEF9wYktqdSXsuOFvO0R6izgnBEoEHOaRSV1nZLXBncKLnQWp3F78iRT7xoZJn-niJRMO5Bb87boZnCt1sW_PX27rCsRL70y6o4lKubMSRzDo9lWD0CQmAeuV4gadYsFm4E"
                ].map((src, i) => (
                  <img key={i} alt="Zembil art" className="rounded-xl w-full h-auto hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-secondary/20 dark:border-white/10 opacity-90 hover:opacity-100" src={src} />
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div className="flex flex-col gap-10 py-10 md:py-16">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">
                  Uzmandan Bilgiler
                </h2>
                <p className="text-md mx-auto max-w-2xl text-text-main/60 dark:text-gray-400 md:text-lg">
                  Zembil ustaları ve kültür uzmanlarından değerli bilgileri video formatında izleyin.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Embed Video */}
                <div className="flex flex-col gap-4 group">
                  <div className="relative aspect-video w-full rounded-xl bg-secondary/20 dark:bg-surface-dark overflow-hidden shadow-md group-hover:shadow-xl transition-all border border-transparent dark:border-white/10">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/KSoHdJnpT5E?si=jooZ91Q5wuUmAKJH" 
                      title="Zembil Sanatının Tarihi" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">Zembil Sanatının Tarihi</h3>
                  <p className="text-sm font-normal leading-normal text-text-main/60 dark:text-gray-400">Prof. Dr. Ayşe Yılmaz ile Zembil'in kökenlerine yolculuk.</p>
                </div>

                {/* Other Items */}
                {[
                  { title: "Örme Teknikleri Atölyesi", desc: "Usta Hatice Kaya'dan yeni başlayanlar için temel örme dersleri." },
                  { title: "Yapay Zeka ile Desen Tasarımı", desc: "ZembiLab ekibinden geleneksel motiflerin dijital dönüşümü." }
                ].map((video, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group cursor-pointer">
                    <div className="relative aspect-video w-full rounded-xl bg-accent dark:bg-surface-dark flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-lg transition-all border border-secondary/20 dark:border-white/10">
                      <div className="absolute inset-0 bg-primary/10 dark:bg-white/5 rounded-xl group-hover:bg-primary/20 dark:group-hover:bg-white/10 transition-colors"></div>
                      <span className="material-symbols-outlined text-6xl text-primary dark:text-secondary z-10 group-hover:scale-110 transition-transform">play_circle</span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white group-hover:text-primary transition-colors">{video.title}</h3>
                    <p className="text-sm font-normal leading-normal text-text-main/60 dark:text-gray-400">{video.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Image */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div 
                  className="flex min-h-[480px] flex-col gap-6 rounded-2xl bg-cover bg-center bg-no-repeat items-start justify-end p-8 shadow-xl border border-transparent dark:border-white/10" 
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.0) 0%, rgba(17, 22, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCj9YadXnr9rANGenmaS3p6WU73GfbrhZqZ5mit4UsCmRZLdiZXip7Jwi5_Omyj1pnb0epzd16xuAESeCnwrh3pWYSp1xXBir7iF6iYF3llWz96pdyxHx1-feCKjOBm09SO00lxUouz_Wbz3o1BYQfFDQ1EZBOs5SbEIiZq2NZc1g5jbV9-8KqPgoXKkfy0PYXSN151s7onIZ-U7ri7Kf3vzjhrLMIF1ID0SUrPaVzrJ0yXdaqIcDr8wXcQWIlRWTsBPHUrvbELqeo")'}}
                >
                  <div className="text-white max-w-2xl">
                    <h3 className="text-3xl font-bold mb-2">Doğadan Sanata</h3>
                    <p className="text-white/90 text-lg">Zembil otunun göl kenarından sanat eserine dönüşen hikayesi.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="flex flex-col gap-10 py-20 md:py-28 @container">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">
                  Hedefler
                </h2>
                <p className="text-md mx-auto max-w-2xl text-text-main/60 dark:text-gray-400 md:text-lg">
                  Geleneksel Bafra Zembili el sanatını yapay zeka teknolojisiyle birleştirerek kültürel mirası koruma ve geleceğe aktarma misyonumuz.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { icon: 'neurology', title: 'Yapay Zeka & Gelenek', desc: 'Geleneksel zembil üretim bilgisini yapay zeka ile analiz ederek yeni desenler üretiyoruz.' },
                  { icon: 'archive', title: 'Dijital Arşivleme', desc: 'El sanatının her detayını dijital ortama aktararak gelecek nesiller için kalıcı bir kaynak oluşturuyoruz.' },
                  { icon: 'hub', title: 'Yenilikçi Teknoloji', desc: 'En son teknolojiyi kullanarak kültürel mirasın korunması için modern çözümler sunuyoruz.' }
                ].map((goal, idx) => (
                  <div key={idx} className="flex flex-1 flex-col gap-3 rounded-xl border border-secondary/20 dark:border-white/10 bg-white dark:bg-surface-dark p-8 text-center items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-primary dark:text-secondary p-3 bg-secondary/10 dark:bg-white/5 rounded-full mb-2">
                      <span className="material-symbols-outlined text-4xl">{goal.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold leading-tight text-text-main dark:text-white">{goal.title}</h3>
                      <p className="text-sm font-normal leading-normal text-text-main/70 dark:text-gray-400">{goal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works Section */}
            <div className="flex flex-col gap-10 py-10 md:py-16">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main dark:text-white text-center">
                Nasıl Çalışır?
              </h2>
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 max-w-4xl mx-auto">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary bg-white dark:bg-surface-dark dark:text-secondary shadow-sm">
                    <span className="material-symbols-outlined">camera</span>
                  </div>
                  <div className="w-px grow bg-secondary/40 dark:bg-white/10"></div>
                </div>
                <div className="flex flex-1 flex-col pb-10">
                  <p className="text-sm font-bold tracking-wide text-primary dark:text-secondary">ADIM 1</p>
                  <p className="text-xl font-bold leading-normal text-text-main dark:text-white">Veri Toplama</p>
                  <p className="text-base text-text-main/60 dark:text-gray-400 mt-2 bg-white/50 dark:bg-surface-dark/50 p-4 rounded-lg border border-secondary/10 dark:border-white/5">Geleneksel Bafra Zembili ustalarından desen, teknik ve malzeme bilgilerini topluyoruz.</p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="w-px h-2 bg-secondary/40 dark:bg-white/10"></div>
                  <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary bg-white dark:bg-surface-dark dark:text-secondary shadow-sm">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div className="w-px grow bg-secondary/40 dark:bg-white/10"></div>
                </div>
                <div className="flex flex-1 flex-col pb-10">
                  <p className="text-sm font-bold tracking-wide text-primary dark:text-secondary">ADIM 2</p>
                  <p className="text-xl font-bold leading-normal text-text-main dark:text-white">Yapay Zeka Analizi</p>
                  <p className="text-base text-text-main/60 dark:text-gray-400 mt-2 bg-white/50 dark:bg-surface-dark/50 p-4 rounded-lg border border-secondary/10 dark:border-white/5">Toplanan veriler yapay zeka modelleri tarafından analiz edilerek desenlerin yapısal özellikleri öğrenilir.</p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <div className="w-px h-2 bg-secondary/40 dark:bg-white/10"></div>
                  <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary bg-white dark:bg-surface-dark dark:text-secondary shadow-sm">
                    <span className="material-symbols-outlined">category</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col pb-3">
                  <p className="text-sm font-bold tracking-wide text-primary dark:text-secondary">ADIM 3</p>
                  <p className="text-xl font-bold leading-normal text-text-main dark:text-white">Dijital Arşiv & Uygulamalar</p>
                  <p className="text-base text-text-main/60 dark:text-gray-400 mt-2 bg-white/50 dark:bg-surface-dark/50 p-4 rounded-lg border border-secondary/10 dark:border-white/5">Sonuçlar, yeni tasarımlar ve eğitim materyalleri için dijital bir arşivde sunulur.</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 border-t border-secondary/30 dark:border-white/10 py-10 text-center bg-accent/30 dark:bg-surface-dark">
              <div className="flex flex-col items-center gap-4 text-text-main dark:text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="dark:bg-white/90 dark:px-2 dark:py-1 dark:rounded-lg">
                    <img alt="ZembiLab Logo" className="h-16 w-auto opacity-90 mix-blend-multiply dark:mix-blend-normal" src="https://r.resimlink.com/TJDVsF7BEXj.jpg"/>
                  </div>
                </div>
                <p className="text-sm text-text-main/70 dark:text-gray-400 font-medium">Gelenek ve teknolojinin buluştuğu yer.</p>
                <div className="flex gap-4 mt-2">
                  <a className="text-primary hover:text-primary-dark transition-colors bg-white dark:bg-surface-light-dark p-2 rounded-full shadow-sm" href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </a>
                  <a className="text-primary hover:text-primary-dark transition-colors bg-white dark:bg-surface-light-dark p-2 rounded-full shadow-sm" href="https://instagram.com">
                     <span className="material-symbols-outlined">photo_camera</span>
                  </a>
                </div>
                <p className="text-xs text-text-main/50 dark:text-gray-500 mt-4 font-bold">© 2025 ZembiLab. Tüm hakları saklıdır.</p>
                <p className="text-xs text-text-main/50 dark:text-gray-500 mt-2 max-w-3xl italic">
                  Bu mobil uygulama, ‘Konverjans Kültürü Bağlamında Bafra Zembili Geleneğinin Dijital Aktarımı’ adlı TÜBİTAK 2204-A Lise Öğrencileri Arası Araştırma Projesi kapsamında geliştirilmiştir.
                </p>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;