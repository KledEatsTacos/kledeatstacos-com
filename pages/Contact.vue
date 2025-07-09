<template>
  <div class="contact">
    <Card class="contact-card">
      <template #title>
        <div class="contact-header">
          <i class="pi pi-envelope contact-icon"></i>
          <span>Get In Touch</span>
        </div>
      </template>
      
      <template #content>
        <div class="contact-content">
          <p class="contact-description">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method" @click="openEmail">
              <div class="method-icon">
                <i class="pi pi-envelope"></i>
              </div>
              <div class="method-content">
                <h3>Email</h3>
                <p>mustafamasri180@gmail.com</p>
                <span class="click-hint">Click to send an email</span>
              </div>
            </div>
            
            <div class="contact-method" @click="copyEmail">
              <div class="method-icon">
                <i class="pi pi-copy"></i>
              </div>
              <div class="method-content">
                <h3>Copy Email</h3>
                <p>{{ copied ? 'Copied!' : 'Copy to clipboard' }}</p>
                <span class="click-hint">{{ copied ? '✓ Email copied' : 'Click to copy email' }}</span>
              </div>
            </div>
          </div>
          
          <div class="response-time">
            <i class="pi pi-clock"></i>
            <span>I typically respond within 24-48 hours</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Contact",
});

const copied = ref(false);
const email = "mustafamasri180@gmail.com";

const openEmail = () => {
  window.location.href = `mailto:${email}?subject=Hello from your portfolio!`;
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
@import "/assets/animation.scss";

.contact {
  display: flex;
  justify-content: center;
  animation: fadeIn 0.5s;
  
  .contact-card {
    max-width: 600px;
    width: 100%;
    
    .contact-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      
      .contact-icon {
        font-size: 1.5rem;
        color: var(--primary-color);
      }
    }
    
    .contact-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      
      .contact-description {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-color-secondary);
        margin: 0;
      }
      
      .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--surface-border);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.3s ease;
          
          &:hover {
            background: var(--surface-hover);
            border-color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .method-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            background: linear-gradient(45deg, var(--primary-color), var(--primary-600));
            border-radius: 50%;
            color: white;
            font-size: 1.25rem;
          }
          
          .method-content {
            flex: 1;
            
            h3 {
              margin: 0 0 0.25rem 0;
              font-size: 1.2rem;
              color: var(--text-color);
            }
            
            p {
              margin: 0 0 0.25rem 0;
              color: var(--text-color-secondary);
              font-weight: 500;
            }
            
            .click-hint {
              font-size: 0.9rem;
              color: var(--primary-color);
              font-style: italic;
            }
          }
        }
      }
      
      .response-time {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        padding: 1rem;
        background: var(--surface-ground);
        border-radius: var(--border-radius);
        color: var(--text-color-secondary);
        font-style: italic;
        
        i {
          color: var(--primary-color);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact {
    .contact-card {
      margin: 0 1rem;
      
      .contact-content {
        .contact-methods {
          .contact-method {
            flex-direction: column;
            text-align: center;
            
            .method-content {
              h3, p, .click-hint {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
