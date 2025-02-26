document.addEventListener('DOMContentLoaded', function() {
  // Find all blockquotes
  const blockquotes = document.querySelectorAll('blockquote');
  
  blockquotes.forEach(function(blockquote) {
    // Get the last paragraph in the blockquote
    const paragraphs = blockquote.querySelectorAll('p');
    
    if (paragraphs.length > 1) {
      const lastParagraph = paragraphs[paragraphs.length - 1];
      const text = lastParagraph.textContent.trim();
      
      // Check if the last paragraph starts with a dash (author attribution)
      if (text.startsWith('–')) {
        // Apply author attribution styling
        lastParagraph.style.textAlign = 'right';
        lastParagraph.style.fontStyle = 'italic';
        lastParagraph.style.marginTop = '0.5em';
        
        // Replace the dash with an em dash
        lastParagraph.innerHTML = lastParagraph.innerHTML.replace(/^-\s*/, '— ');
      }
    }
  });
});
