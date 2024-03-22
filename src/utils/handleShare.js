 export const handleShareClick = (platform) => {
  let shareUrl = '';
  let subject = '';
  let body = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        break;
      case 'twitter':
        const tweetText = 'Check out this awesome content!';
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this awesome content: ' + window.location.href)}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'viber':
        shareUrl = `viber://forward?text=${encodeURIComponent('Check out this awesome content: ' + window.location.href)}`;
        break;
      case 'skype':
        shareUrl = `skype:?chat&topic=${encodeURIComponent('Check out this awesome content: ' + window.location.href)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`;
        break;
      case 'tiktok':
        shareUrl = `https://www.tiktok.com/@yourusername/video/1234567890123456789`;
        // Replace with a real TikTok video URL
        break;
        case 'gmail':
          subject = 'Check out this awesome content!';
          body = `Hey,\n\nI thought you might be interested in this:\n${window.location.href}\n\nBest regards,\n[Your Name]`;
          break;
      // Add more cases for other social media platforms
      default:
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    } else if (subject && body) {
      const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  };
