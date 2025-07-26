import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../data/portfolio';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

export const Articles: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-6 pb-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <TerminalWindow title="~/articles - man pages">
            <div className="space-y-2">
              <div className="text-cyan-400">$ man articles</div>
              <div className="text-yellow-400">ARTICLES(1) - Technical writing and tutorials</div>
              <div className="text-gray-400">Published technical articles and blog posts</div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <TerminalWindow title={`article-${article.id}.md`}>
                <motion.a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-4">
                    {/* Article Header */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {article.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>

                    {/* Article Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Summary */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {article.summary}
                    </p>

                    {/* Terminal-style footer */}
                    <div className="pt-3 border-t border-gray-800 font-mono text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>$ curl -L {article.url}</span>
                        <span>HTTP/1.1 200 OK</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        {/* Writing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <TerminalWindow title="writing-stats">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-cyan-400">{articles.length}</div>
                <div className="text-gray-400 text-sm">Published Articles</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-green-400">50K+</div>
                <div className="text-gray-400 text-sm">Total Reads</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-gray-400 text-sm">Positive Feedback</div>
              </motion.div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 text-center">
              <div className="text-gray-400 text-sm font-mono">
                $ echo "Sharing knowledge, one article at a time"
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://blog.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-cyan-400 hover:text-cyan-300 underline"
              >
                Visit my blog →
              </motion.a>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </div>
  );
};