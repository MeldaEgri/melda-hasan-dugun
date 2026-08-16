import { QRCodeSVG } from 'qrcode.react'
import { PHOTO_UPLOAD_URL } from '../constants'
import ScrollReveal from './ScrollReveal'

export default function PhotoUploadQR() {
  return (
    <section id="fotograflar" className="photo-upload">
      <ScrollReveal>
        <div className="photo-upload__inner">

          <div className="photo-upload__ornament">
            ❦
          </div>

          <p className="photo-upload__eyebrow">
            Düğünümüzden Anılar
          </p>

          <h2 className="photo-upload__title">
            Anılarımızı Birlikte
            <span> Biriktirelim</span>
          </h2>

          <p className="photo-upload__text">
            Bu güzel geceden geriye kalan kareleri
            bizimle paylaşın.
          </p>

          <div className="photo-upload__card">
            <div className="photo-upload__qr">
              <QRCodeSVG
                value={PHOTO_UPLOAD_URL}
                size={210}
                bgColor="#fffdf8"
                fgColor="#3f4939"
                level="H"
              />
            </div>

            <p className="photo-upload__instruction">
  Fotoğrafları yüklemek için
  <br />
  kameranızla okutun
</p>

<a
  href={PHOTO_UPLOAD_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="photo-upload__link"
>
  veya buraya tıklayarak fotoğraflarınızı yükleyin
</a>

            <div className="photo-upload__camera">
              ♧
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  )
}