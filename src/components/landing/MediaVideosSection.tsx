
import { useState } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "../VideoPlayer";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoThumbnailProps {
  title: string;
  url: string;
  thumbnailSrc: string;
}

function VideoThumbnail({ title, url, thumbnailSrc }: VideoThumbnailProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="video-card cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-t-lg aspect-video">
            <img 
              src={thumbnailSrc || "https://i.ytimg.com/vi/" + url.split("v=")[1] + "/hqdefault.jpg"} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-renda flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-8 h-8 text-white ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-1 bg-black">
        <div className="relative">
          <VideoPlayer url={url} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function MediaVideosSection() {
  const videos = [
    {
      title: "Como mudei de vida trabalhando em casa",
      url: "https://www.youtube.com/watch?v=q6AJJoEDSsM",
      thumbnailSrc: "",
    },
    {
      title: "Meus resultados com o método",
      url: "https://www.youtube.com/watch?v=kxTPQ0wYC-k",
      thumbnailSrc: "",
    },
    {
      title: "Dicas para começar do zero",
      url: "https://www.youtube.com/watch?v=CBuw-Oyq7tA",
      thumbnailSrc: "",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <ResponsiveContainer>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            AQUI ESTÁ TUDO O QUE<span className="text-renda"> VAI RECEBER</span> NO TREINAMENTO
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Veja alguns de nossos vídeos e entenda como nosso método funciona na prática
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <VideoThumbnail
                title={video.title}
                url={video.url}
                thumbnailSrc={video.thumbnailSrc}
              />
            </motion.div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
}
