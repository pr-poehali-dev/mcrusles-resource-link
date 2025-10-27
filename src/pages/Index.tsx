import Icon from '@/components/ui/icon';

const Index = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@mcrusles?si=C4jqGL4g3gP9HRIW',
      icon: 'Youtube',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@mcrusles',
      icon: 'Music',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/tHzrEYmDk',
      icon: 'MessageCircle',
      color: 'from-indigo-500 to-blue-600',
      hoverColor: 'hover:from-indigo-600 hover:to-blue-700'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+1a82I2Lx-isyYThi',
      icon: 'Send',
      color: 'from-sky-500 to-blue-600',
      hoverColor: 'hover:from-sky-600 hover:to-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MCRUSLES
          </h1>
          <p className="text-muted-foreground text-lg">
            Следи за обновлениями в соцсетях
          </p>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block w-full p-6 rounded-xl
                bg-gradient-to-r ${link.color} ${link.hoverColor}
                transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                animate-scale-in
                group
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards'
              }}
            >
              <div className="flex items-center justify-center space-x-4">
                <Icon 
                  name={link.icon} 
                  size={28} 
                  className="text-white group-hover:animate-pulse"
                />
                <span className="text-white text-xl font-semibold">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          <p className="text-muted-foreground text-sm">
            © 2024 MCRUSLES. Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
