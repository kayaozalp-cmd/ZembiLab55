import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Kullanıcı isteği üzerine API anahtarı doğrudan koda eklenmiştir.
// Lütfen bu dosyayı GitHub'a yüklediğinizden emin olun.
const apiKey = 'AIzaSyC0ZRoZkQ7jfJ-lhQxSNw91UF_JiCqFvvg';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey });

console.log("ZembilAI Servisi Başlatıldı (API Key Gömülü)");

const SYSTEM_INSTRUCTION = `
Sen ZembiLab'ın yapay zeka asistanı "ZembilAI"sın. 
Amacın Bafra Zembili (geleneksel hasır örme sanatı), tarihi, yapımı ve dijital dönüşümü hakkında bilgi vermektir.
Kullanıcılarla Türkçe konuş. Samimi, eğitici ve yardımsever ol.

ÖNEMLİ KURALLAR:
1. Kullanıcı bir konu hakkında video, belgesel veya görsel içerik isterse veya konu görsel bir anlatım gerektiriyorsa (örneğin "nasıl yapılır", "tarihçesi", "dijital dönüşüm"), Google Search aracını kullanarak en alakalı YouTube videolarını veya kaynaklarını bul.
2. Videoları veya kaynak linklerini KESİNLİKLE şu formatta listele:
   [Video Başlığı](URL)
   
   Örnek:
   [Bafra Zembili ve Dijital Dönüşüm Belgeseli: Geçmişten Geleceğe Bir Yolculuk 2. Bölüm](https://youtube.com/shorts/n_ri6g1HTMY?si=AGcHjZnzdBPmeqA_)

3. Eğer kullanıcı özellikle "dijital dönüşüm" veya "proje videosu" sorarsa, şu videoyu öncelikli olarak öner:
   [Bafra Zembili ve Dijital Dönüşüm Belgeseli: Geçmişten Geleceğe Bir Yolculuk 2. Bölüm](https://youtube.com/shorts/n_ri6g1HTMY?si=AGcHjZnzdBPmeqA_)

4. Cevapların kısa, öz ve Markdown formatında okunabilir olsun.
`;

export const askZembilAI = async (query: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }], 
      }
    });

    let text = response.text || "Üzgünüm, şu an cevap veremiyorum.";

    // Extract and append grounding sources if available, as per API guidelines
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && groundingChunks.length > 0) {
      const uniqueSources = new Map<string, string>();
      
      groundingChunks.forEach(chunk => {
        if (chunk.web?.uri && chunk.web?.title) {
          uniqueSources.set(chunk.web.uri, chunk.web.title);
        }
      });

      if (uniqueSources.size > 0) {
        text += "\n\n**Kaynaklar:**\n";
        uniqueSources.forEach((title, uri) => {
          text += `- [${title}](${uri})\n`;
        });
      }
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bir bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol ediniz.";
  }
};