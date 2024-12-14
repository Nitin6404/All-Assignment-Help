"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface heroHelpProps {
  changeInH: string;
  changeInP: string;
}

export default function HeroSection({ changeInH, changeInP }: heroHelpProps) {
  return (
    <>
      <div className="w-full h-screen bg-hero-pattern_new bg-no-repeat bg-cover rotate-180 bg-[-500px_100px] absolute top-0 left-0"></div>
      <div className="w-full h-[590px]">
        <div className="right absolute bottom-[80px] left-[60%] ">
          <Image
            src="/static/images/groupofpeople.png"
            alt="girl"
            width={800}
            height={800}
            quality={100}
            priority
          />
        </div>
        <div className="search_img  absolute left-[65%] top-1/2 -translate-x-[50%] -translate-y-[50%]">
          <button>
          <svg
            width="55"
            height="55"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37.5" cy="37.5" r="24.7881" fill="white" />
            <rect width="75" height="75" fill="url(#pattern0_680_1066)" />
            <defs>
              <pattern
                id="pattern0_680_1066"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_680_1066"
                  transform="scale(0.00195312)"
                />
              </pattern>
              <image
                id="image0_680_1066"
                width="512"
                height="512"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Xl8XHW9//H358wkXdICpVRWadmuSkFUqtBmaaOyL0Kbk7I1maTciFX06vW6XP1prjvi9cpFUSNtJi0gzUkLCrJDaGZSqBSvAkVRlJZFEKRlado0mTmf3x9tIU2TdGYyM58zmffz8fBxa5uc87o+kpxPvmcDiIiIqOiIdQARDa9Zm52n1j0/LbEj8Q5ApkFwoAIHOA4OUMUBCj3AURygggmA7gfIOAATAZQBKIVifwicAZsUAAcM2s1rAPSt/6bwIXgdQB+AHgDbAN0ByBui2O4LXhPIayJ4zffxmgCvQbEZ0FfC48Ivv+uUI15plmY/p//DENGocQAgMnJBZ+SAcaWhI/xkYro6zhGO+kcAzpGqeggcHArFNADvAPY4gBcCH8DLELwCHy+KyEuA/6wvzvPi+887ofAmf1voOe+0ltetQ4mKGQcAohxy19YdjkToWDj+seLjGIgcqyLHQvUYAPtZ9xl7AyJ/FdWnofo0RJ5Wlb8inHzam7P8Bes4orGOAwBRFlwUbzzMVxyv8GcCcjygMwGcCB7kM/UGgL8I8DcAT/rABhV98sTyo/7I0wtE2cEBgCgN8zqbw1NLnnmXqBzvADMVejJUZkMw1bqtSLwJ4DGFPCrwN0BCT259o+yRO8++dod1GFGh4QBANAJ37eJj1U+c4kBOUcUpAN4LYLx1F+2hF8BjIljnQ9eJE17nzVn6tHUUUdBxACDaJdIZGd8TklNUUCnwTwHkFADTrLsoI68Auk7hrBNFrCyp66LV0V7rKKIg4QBAReu89U0Tx/cmPiDqlyv0o4BUgL/dj1GaAOQPCtznAN3aW9rFuxCo2HEAoKLhtrshHD7hQ0jKaRCctus3/BLrLjLRD+BhEdwrwL3+33se8Wq9pHUUUT5xAKAx7aLOyIxkSM7aecDXauz9EBwiYOfDkB4Qwb1OP+66uTq60TqIKNc4ANCY0qzNzob4M+8XyHkKnAvgA+DXOaXvbwq53YHc9nLiyAcfrG5OWAcRZRt/MFLBc9e6E9QvO8tR+ZhCzwIv3KPsekUgdyqStyK0/S5vjrfdOogoGzgAUEE6b33TxAnb+z6igAvgAgCTrZuoKGwH9H4FvHEliVtvPPXGN6yDiDLFAYAKhtu5ZJKW9HxMfKcWoqeDV+yTrV6o3KOO3z6hx791xRkreqyDiNLBAYACzW13Q3Lo5GqFXwfohYBMsm4iGkIvoPcpZLkc2PMrb6bXZx1EtC8cACiQ3O662Zp06gRw+ZhdKiiKV+FoO0RXeOXLH7LOIRoOBwAKDLczcgjCWAigAcBJ1j1EWfCUADer+Mu8iuXPWscQDcQBgEw1rW8q2bK991zAaQD0LEDC1k1E2acJQO4E/NYpE8bf3jKrpd+6iIgDAJmY33XZoWEJ1ymwBMCR1j1EefSSAm2+E/rp6vKlm6xjqHhxAKD8UUhtvPEjgN+kO2/d42N4qZj5gD6gkBZ5sWc1H0VM+cYBgHLO7VwyCSXbI1D9NIDjrHuIAkf1aRX5nx0TSqO3zWrZZp1DxYEDAOXMRfHGw3z1mxS4EsCB1j1EgSd4XVXaJJT8vjdn+QvWOTS2cQCgrKvtqi9XRz4LxQUAQtY9RAVoh4iukKT/w5VzV/zROobGJg4AlDVuvLECmvwiIOdatxCNEQro/QL53/bK6G3WMTS2cACgUWnWZufJ+MZzFPg6gJOte4jGsN8r9H/+mTjqJr6dkLKBAwBlZOf9+zsaIPJlKGZY9xAVDcFGhXzvwPEly/g8ARoNDgCUlmZtdp6Ib1wgwLfBK/qJLD0L6LdfSRy1jCsClAkOAJSSAQf+bwJ4l3UPEb3lGUC/hxe3LeWzBCgdHABon2pjjR9V0e9D9f3WLUQ0rCcVetUJFUfd0CzNvnUMBR8HABpWbazxo4rkdwGZZd1CRKnSJxTyjY6KaAcEal1DwcUBgPbixiOnQfENAKdatxBRxtapo1/rKG+7xzqEgokDAL1l4ZpF7/FDoauhOMe6hYiyRPAAkvg3b270cesUChYOAISL4o2HJVW/Duhi8Ml9RGOQJgBnGRRf9apaX7GuoWDgAFDEFt29qGz7xNDnBfgPAGXWPUSUc5sh8vVX+qf/jLcOEgeAIlUbi5ynwLUAplu3EFHePSWCz7VXRO+wDiE7HACKjBtvfBfUvwbAGdYtRGRN74M6n/GqWp+0LqH84wBQJBbdvahsx8TQfyjwZQCl1j1EFBj9Cvmp9JZ8zTut5XXrGMofDgBFoDbWcLFCfwjgEOsWIgqslxT4dEdl1LMOofzgADCGLYg1Hu3A/wmAM61biKhACH4TSsonbp7b+px1CuUWB4AxaOeb+vqWYOcLe3h1PxGl6w0AX5tZMeNaPlZ47OIAMMYsiDWc4kCXAphp3UJEBS/mh9C0ak70T9YhlH0cAMaISGdk/NYwmgX4PPgwHyLKnn4FfigH9nzNm+n1WcdQ9nAAGAPc7rrZ8J1lAN5t3UJEY5U+4cO5fFVl6zrrEsoODgAF7Lz1TRPHb+/7DoArATjWPUQ05iVFce32iaVfuW1WyzbrGBodDgAFamH34hN8Td4ExYnWLURUdJ5yVC5ZWdX6O+sQyhwHgEKjEDce+TSAqwCMs84homKlCYF8W1/s+aZX6yWtayh9HAAKyMUPX35woj/ZCuhZ1i1ERDtJZzIRqltdff3z1iWUHg4ABcKN1V0IdX4BwVTrFiKiPQheB7DEq4jeZJ1CqeMAEHDuWneCJid9T6Cftm4hItqHFUhMXOJVX7fVOoT2jQNAgC2IN85y1L8RwL9YtxARpUSwUXy9rL2qrds6hUbGASCA3HY3JIeUfVEFzQBKrHuIiNLUL4pmfannKl4gGFwcAALmwnV1U8N9zo0AzrBuISIapQcTTnLhLeUrXrYOob1xAAgQtzvyPvhYDeAo6xYioix5DurXeFXLf2sdQnvi0+MCorar4TL46AYP/kQ0trwT4nTVdDVcbh1Ce+IKgLF5nc3hg8IbvyXAF61biIhybAVCPR/35njbrUOIA4Apd23d4UiEPIjOtm4hIsqTR5NOaMHq8qWbrEOKHQcAIzXxSKUo2gEcYt1CRJRf+k9B6OL2ymX3WZcUM14DYMCN1TeJ4n7w4E9ERUkOUvh31cYiX4TyF1Er/B8+j3Y+1W/iUoFcbN1CRBQIipUI9zTwuoD84wCQJ7vu778FQKV1CxFRwPw2XBI+/5enXv8P65BiwgEgDxZ21x/j+3IH+EhfIqLhPOP4yXNWzl3xR+uQYsFrAHLM7a6b7fvyEHjwJyIayVG+E+quiUXmWYcUCw4AOeR2NdTAd+4HMM26hYioAEwR4O7arobLrEOKAQeAHHFjkc9AdCWACdYtREQFpFRFl9fGIs3WIWMdrwHIsnmdzeGDQhuvFcEV1i1ERAVNEJ0yvrSpZVZLv3XKWMQBIIvcziWTENq2EoKzrVuIiMaI+/sTqLm1OvqadchYwwEgS9y1dYfDd+6E4kTrFiKisUWfSCZKzlpdff3z1iVjCQeALJjfvXh6KJm4DyLHWrcQEY1RmxAKfdSbs/Rp65CxggPAKLnxxndB/XsBvNO6hYhojHvJcUKnrSxf+oR1yFjAAWAU3K6G4yF6L4DDrFuIiIrEy3Bwhlce/b11SKHjbYAZcmP1J0P8NeDBn4gon94BH51udx1foz5KHAAy4MYbKwB5AJCDrFuIiIrQAfCde2tjjR+1DilkHADSVBOLzIMm7wSwn3ULEVERK1P4t7vx+vOtQwoVB4A0uF315whwJyCTrFuIiAjjoOK5XQ011iGFiANAitx4w0KI3AJgvHULERG9pRSiN7tdkYh1SKHhXQApqOmKXCSCGwCErFuIiGhIvqjUt1e13mAdUig4AOyDG68/HyodAEqsW4iIaERJEb2kvaKt3TqkEHAAGEFtrPGjCv82cNmfiKhQ9EF1vlfV9hvrkKDjADAMt7tuNny5hxf8EREVnO0KnN1RGX3QOiTIOAAMwe2OvA8+HgAwxbqFiIgy0gNxzvQqlsWtQ4KKA8Ag7prIiRB0QjDVuoWIiEZB8Lrjy4dXVrX+zjoliDgADLBgTeQ4x8EaAIdatxARUVa8ApV5XlXrk9YhQcMBYBc3Xnck1OkCMN26hYiIsuoFH07Vqsplf7MOCRI+CAiAu7bucKjTCR78iYjGosMd+PfN77z8COuQICn6FYDz442Tx6kfA3CSdQsREeXUk/0JlN9aHX3NOiQIinoFoGl9U8k43+8AD/5ERMXg+JIwbnE3uKXWIUFQ1APAlt4d10BwunUHERHlzTzZPPFn1hFBULQDQG1X5D+h8gnrDiIiyi+FNLix+q9Yd1grymsAauP1tarySxTxAEREVOQUQL1XGV1hHWKl6AYAN95YAfXvBZ/vT0RU7Prgy1ne3NYHrEMsFNUAsLC7/hjfl4cATLNuISKiQNgMceZ4Fcuesg7Jt6JZAr9wXd1U35c7wYM/ERG97UCof+fFD19+sHVIvhXFABDpjIwP9zm/BnCcdQsREQXOUYm+xG3nrW+aaB2ST0UxAGwN6zIAc6w7iIgooAQfHL+tb5l1Rj6N+QHAjUU+J5CLrTuIiCjgBAvdWORz1hn5MqYvAqxZ0zBHHH0QQIl1CxERFYQkBGd5FdF7rUNybcwOAPO7Ljs0JOFHwVf7EhFRel5OJsInr66+/nnrkFwak6cAmtY3lYQk1A4e/ImIKH3vCIUTHWfdceU465BcGpMDwOZtff8LSIV1BxERFaxTyia9+SPriFwac6cAarsaLlPRon20IxERZZHo5V5F21LrjFwYUwPAwljjST78tQCK6l5OIiLKmV5fnMpVFcvWW4dk25gZANy1iw9EMvkIgKOtW4iIaEx5NpwoPfmX1S3/tA7JpjFxDYDb7oaQSP4SPPgTEVH2HZkI993ktrsh65BsGhMDAA6d+CUITrfOICKiMes0HDrxS9YR2VTwpwDcWP3JgKwFUGrdQkREY5kmHJHKlRXRh61LsqGgVwAW3b2oDJAbwYM/ERHlnIR9xQ3nxxsnW5dkQ0EPAL0TQ9cAeJd1BxERFY1jStUfE88HKNhTAG6s7kLAWW3dQURERUjkIq+idaV1xmgU5ADgrq07HAnnDxBMtW4hIqKi9BrEP8mrWP6sdUimCu4UQLM2O0g6bTz4ExGRoQMAZ0Uh3xpYcAPAhtjGfwfwEesOIiIqcooqPWTiv1tnZKqgTgEsWFP3fsdxHgav+iciomDoh/oVXtXy31qHpKtgVgDOW9800XFCvOWPiIiCpATiLN95W3phKZgBYNz2/u8C+h7rDiIiokHetWNC6FvWEekqiFMAbnfdbPhODEDBXmxBRERjmq++VHbMbV1rHZKqwK8AnHXHlePgh5aCB38iIgouR0L6M3eDWzCnqQM/AEyevPXbXPonIqLAU5yomyd9wTojVYE+BbAg1nCKA+0Gf/snIqLCsAMqH/CqWp+0DtmXwK4AuBvcUgfKpX8iIiok4yD+z5u1ObDH190CGyivln0ewEzrDiIiovRIxYbYpo9bV+xLIE8BXNQZmZEM4wkABXdfJREREYA3Qr6ccPPc1uesQ4YTyBWAZAl+DB78iYiocO2XFP2ZdcRIAjcAuPHIJVCcY91BREQ0KoKza+P1tdYZwwnUKQD33qb9Mb7vTwAOsW4hIiLKgn/0J/DuW6ujr1mHDBaoFQAZ19cMHvyJiGjsOLg0hK9bRwwlMCsAblfD8RD9PYAS6xYiIqLs0YSvevKqquWPWZcMFJwVAMGPwYM/ERGNORJ2xPkxNDi/dAMBGQBquiIXAVpt3UFERJQjlbXd9a51xEDm08iiuxeV9U50/gTIEdYtREREOfRc74TSd982q2WbdQgQgBWAHRND/8GDPxERFYF3jtve9x/WEbuZrgBcFG88LKn+n8GH/hARUXHYHvLlXUF4QqDpCoCvyW+BB38iIioeExKONltHAIYrAAtjjSf58B8F3/ZHRETFxQf0Q15l26OWEWYrAD78q8GDPxERFR8HcK4OQET+ufHIaQBOs9g3ERGRPa12Y5EzLQtsVgAU3zDZLxERUXBc1azNZivxed9xTazhXACn5nu/REREAfPeJ7ufqbHaeX4vAlSIG4+sB/CBvO6XqLDtAPAqBK9CsRnAqwIkVeFD5PXBHyzQKQCgOx+tPRXAgbv+71TwcdtEQfPUK4kZJzxY3ZzI947D+dxZTXfkQvDgTzSIbgXkSQBPCXSTr84mcXSTo/6m0m36woozVvRka0/nxxsnj/P1neokpztwpqtiukKnizjvhup7AIzP1r6IKCXvOii0KQLg+nzvOG8rAM3a7GyIP/MHQE7I1z6JAuhFAA+J4lEfskFFHl9VsewZCNQ6zG13Qzhs8rHw9UQRPUGhJ0NlNgRTrduIxrjntr45+bg7z752Rz53mrcBoDbWcLFCb8rX/ogC4jGFPOgADyccZ+3q8qWbrIPS5cYb3yXQU1UxZ9dLu46zbiIaaxT4ZEdl9Lp87jMvA4Db7oZwaNkTAN6dj/0RmVG8KoIHFHpfyHfuDMLjPrPNXbPoKDjOaQL5qO68nfcA6yaiMSDvqwB5GQBq4w31qhrNx76IDLygkFUQ7TihfEZ3szT71kH50rS+qeS1bf0fhuPXqOICQA6ybiIqWCpLvKrWn+ZrdzkfAJrWN5Vs2d73JwBH53pfRHn0sihu8lW8E6qmP1xMB/3hzOtsDr8j/Ow8hboQXQjF/tZNRAXmORzYc6w30+vLx85yPgC4sfomQH6e6/0Q5YEP6AMKaZEDe36Vr2/SQhTpjIzfGsZ5Am0C5CMwfvMoUaEQwSfaK6I/y8u+crnxXb/9/wXA9FzuhyjHXoLqT5PJkmWrq69/3jqm0CxYEznOCeFfofhX8HoBon3ZNGVC6XEts1r6c72jnA4AbiyyCMDyXO6DKIf+AOh1CG1b4c3xtlvHFDq3c8kkhHsuAeSz4AXBRMMSlUXtVa035Hw/OduyQtzuyB+gODFn+yDKjXvhy/e8ua0PWIeMRc3a7DwZ23i+Cr4M4EPWPUSBI3jcK4+elOvng+RsAKiNRc5T4Ne52j5RDnSL+P+vvWJ5p3VIsaiNNX5U1f8OBB+0biEKEoWc11HZensu95GzRwEr9Au87ocKgqBLkvr/2ue2dVmnFJv2ymX3QXG/211/HlT+C8D7rJuIgkCgXwCQ0wEgJ0fo2q76chWJ52LbRFn0F1F8ob0qeqt1CO08NfBEfFO9QL8N4FDrHiJrolrRXtXWnavt5+R1wCryuVxslyhLXhPgS1vfnHwiD/7B0SzNfkdla2vvhNJjBfjSzpckERUvdeSzudx+1lcALuqMzEiG8TSAULa3TTRKqkBrstT/wi2nLH/VOoZG5sbrjoQfuhai51u3EBlJwk8e581d8UwuNp71awCSYVwJHvwpeP4qcK7wKpfdZx1CqfEqlj8L4GM7LyjW6wA5wrqJKM9CcEKfAvDvudh4VlcAzo83Th4H/zk+ApSCQxMK57oJ2xL/ueKMFT3WNZQZ996m/XV8/zcE+ink6NQlUUC9id7Sd3qntbye7Q1ndQVgvCYbFMKDPwXFnwBc1lHZ+qh1CI3Orh9+n3HXNPwKjt/G1QAqIpMxvi8C4Jpsbzh7k7RCFPKprG2PKHMqwHUI9XzAq2zjwX8M8ea2PoBQ+CQBPOsWojy6slmbs77ylbVTADXd9aeLL3dna3tEGXpJBIvbK6J3WIdQbtXE6usEci2A/axbiPLgLK8yelc2N5i1iUJ8+US2tkWUGY0nNfEBHvyLQ0dl23LfxywIHrduIco5wRXZ32QWzO+8/IhQuP8ZQHL2ZEGikUnLlAkln8rHG7QoWNy17gT4ZddBEbFuIcqhZNIJHbO6fOmmbG0wKwdsJ5Ro4sGfbOhWiHO5V9G60rqEbOx6U2ODG6t/CDtPCZRaNxHlQMhJJhcD+Fq2NjjqFYCm9U0lW7b3bQRw2OhziNLynK/+uauqlj9mHULBUBuvq1Z1VgGYYt1ClAMvTplQOj1bK52jvgZgy/bec8GDP+WbyP+FxDmVB38aqL1ieafjJ8sB5OTJaUTGDt3c23detjaWhYsApXH02yBKg+Ke0nDfvJsrlv3dOoWCZ+XcFX9MlPofBJQvJKMxR1Qbsrat0Xzy/K7LDg1J6Fme/6f8kRa8uHWJV+slrUso2Ny17gQkJt3MdwnQ2KKJpCaPXF11w4uj3dKoVgAchBbx4E/5osBPvIrWK3jwp1R4c7zteGnrfFW0WbcQZY+Edx57R29UA4CIE8lGBNG+KHBVR2X0UxCodQsVDq/WS55QOaNRRK+3biHKFhFZDB39RfwZb8DtrpsN31k72gCifRHB19orot+07qACphA3HvkBgM9ZpxBlhePP8cqXPzSqTWT6iZp06kazY6JUiMh/8OBPoyZQrzL676L4kXUKUTZk4xic0QpA0/qmki3b+l6EYOpoA4iGo0BzR2X0v6w7guLizqaDEiWJqZrUqXBwIKATRFAC1Um7P0ZV3oAg6Qh6BNicSOLVpI9Xbq2OvmbZHhgKqYlHfi7Av1qnEI2K4lVM7TnMm+n1ZbqJjC7g27y9/wzhwZ9ySXB1R0XxHfwviV0yJeGXnKjizFToe0VwFIDpAGYk0DceCsjAdTsFBs7xsuuPqjv/yXF2/seN1W8FZBMEG1Xlr47qE+Lg8e1wNvy6Ytmbeft/0JpAT9AZV2yIbywDcIl1DlHGBFNlc9kZAG7LfBMZqInV3ySQizPdKdGIRH/qlbd9shgu+FvYvfiEpJ+sEuBU7PzPcXlO8AH8EcDDAqzVUKjLm7P06Tw35N28zubwtJKNHVB8zLqFKFMC3NxeGc34WJz2AOB2LpmE8LaXAJRlulOiEdw6s2LGgmZp9q1DcsHtXDJJSnrOhuJMhZwO4HDrpiH8FaL3iMqdExO4N1od7bUOyoVdzwm4H6KzrVuIMrQNiYkHe9XXbc3kk9MeAGri9ZeKyg2Z7IxoRIpHeieWzrttVss265RsWnT3orLtZc4FolID4EwA462b0vAmgNsAvwMHbv/NaM43BpHb1TANog8DONq6hSgTorKovao1o2Ny+isAsfrbADk3k50RjWATEjjVq46+ZB2SLW6s/mSFUyfQywAcaN2TBa8B0g5Hf+qVR39vHZMtC7vrj/F9PAzIQdYtRBm4zauMZvS0y7QGgPPjjZPHqf8yCus3GAo6wes+tHxVRdsG65TRcje4pbp54kUizr9B9f3WPTkUA/z/mVlx9K/Gwukat6thLkTvAV8lTIWnt7Sk/+AbT73xjXQ/Ma3nAJT6/jngwZ+yS8VHpNAP/m7nkkluPPIlbC7bKJC2MX7wB4BKwFm9Ib7xLzWxyJKz7rhynHXQaHhVrWsg8u/WHUQZGN/fX3pOJp+Y1gAgDmoy2QnRcFTw3faq6K3WHZladPeiMjcW+QzC2/4CxXcBHGrdlGdHC/CTSZPf/Isbi3wm0hkp2F8QvIrWH/O9AVSIVHRBJp+X8gBw3vqmiVCcmclOiIZxv/y952vWEZlo1manJlZf1zsx9DSAHwE4xLrJ2DsB/KgnjD/XxOrrsvGccgsS7vkERP7PuoMoLYqzFt29KO0781IeAMZv7z0DvPWPsue5cKL0okJ8s19tvK56Q3zj7wTSBh74B3unQNrceGTNwq6GD1jHpMub422H49RC8Lp1C1EaJu6Y4KT9C3oapwCcC9PdONEwfBG//pfVLf+0DknHJbFLprixhp+rOvcDOMm6J+AqfdFH3FjDz93OJZP2/eHB4c1Z+rT48inrDqK0iJP2nQApDQBuuxsCuPxP2aHA1e0VyzutO9JR0xW5qB+lTwHahFG8RbPIOIA2oWTb4zXd9adbx6Sjvar1BoX+0rqDKFUK/+xdx+qUpTQAyCETTwUwLaMqooFE/k8OLJzz/u69Tfu7schyEfwS/B7IjGKG+HKXG2v4+XnrmyZa56RKesd9AsAm6w6i1MhBu47VKUv1FEBGtxgQDbIdPi4rlKfJuV0NczG+73EAi6xbxgABtGn89r7fLuiqe691TCq801peVyCCne9LIAo8lfQe0pfSAKAiGT1liGggVW32qlqftO5IhRurb4Lovdh5dTtlz0xHnHW1sUijdUgqOiqjD0L1OusOopRIer+s7/Nc5kWdkRnJMJ7JvIgIAPD7VxIzPvhgdXPCOmQkbueSSRLetkwB17plzFP98ZSJ4z7XMqul3zplJJc+fOl+ff3hDYAcYd1CtC+hBI66uTq6MZWP3ecKQDIkZ426iIqd7wg+EfSD/0XxxsMQ3raGB/88EfnUlt6+uy7ojBxgnTKSG0+98Q0orrDuIEqFX5L6Bfv7PgUgOG1UNVT0VPSalRXRh607RuKuiZyYVP8hAAV373pBU3y4JIzuizojM6xTRuJVtf0GwGrrDqJ9UU39mD3iADCvszkMaPXok6iI/V36ywJ91X9NLDIPDroBHGndUqSOT4bxkLsmcqJ1yIhC/qcB9FhnEO3Dh1O9HXDEAWBa6d8+CCDQy3MUbCLyn171dVutO4bjxiJnCnAHgMnWLUXuEDhYszAeSes2pnzy5ix/QYGrrTuI9uEA57CyD6bygSOfAkgKl/9pNH53fPn0FdYRw6ntilwA4FcAJli3EABgiq+42403VliHDGfHhNKrAX3euoNoJL6vKT14a+QBgOf/aRTE188G9V3xNd31p6vgZvD970GzH9T/zcLuSEq/weTbbbNatok6X7buIBqRyEdT+rDh/mHR3YvKeieGtgAoyVoUFRG5xatsnW9dMZTaeF21qvMb8Df/INvsq1+9qmr5Y9Yhe1GIG4usgyCQQwoRgP7x25JTVpyxYsRrVoZdAegtC80BD/6UGd9xnEBe+OfG6k9WlV+DB/+gO9AR5x53zaKjrEP2IlAIAvn1TbRLya5j+IiGHQBEtSq7PVQ0FN7z8ZRcAAAgAElEQVTK8qVPWGcM5q6tOxzArYAU1NvpitjBcEJ3XBK7ZIp1yGBeZfQuQOPWHUTDUR+V+/qYYQcAhczNbg4VCR+Kb1tHDHZ+vHEyks4dfJpbwXl3v5TeetYdV46zDhlMHXzTuoFoOOJgn8fwIQeASGdkPMDzW5SRm7250cetI/agkHGqbQAK4iU0NIiiqmzSmz+yzhiso7ztHgAx6w6iISlO2XUsH9aQA0BPSE4BMOInEg1BHSf0XeuIwWriDV8B9ELrDsqcCK5wuyIR647BVPzAfb0T7TJu17F8WEMOACr7PndAtBfFvUE791/TXX+6QP/LuoOyQHCd2x15n3XGQB3ly+8C5I/WHURDEn/EZ2oMOQCIaGCfxkXBJZAfWjcM5HY1TBNf2pDia68p8CYgqZ7buSQ4F3EKFPADd3qCaJcRj+V7/2BUCFRHXDYgGsJT7ZWt91hH7EF0KYBDrDMoi0SORUnP960zBtr65n5tAP5h3UG0F5XZ0OGf97PXALBwbf3RgByU2yoaa1Tkf3b+NhQMbqy+CcB51h2UAypXuF3151hn7Hbn2dfuEOgvrDuI9iKY6j60+Jjh/nmvAUCTzuzcFtHYo1v7IDdZV+w2v+uyQwG5yrqDckYg8gv33qb9rUN2SyRKfg4gad1BNJgk/GFPA+w9AMDn8j+lRQQ3/7pi2ZvWHbuFJHwd+BbLse5QjNvxLeuI3VZXX/88FPdbdxANNtIxfe9rAEQ+lNMaGnNUdJl1w2418ch8ABdYd1AeiCxZEGsIzi8sjgTm+4DoLTL8hYB7DADzOpvD4MNSKD1/8sqXP2QdAQDuBrdUFIG6QIxyynGg14x0kVNeTdl6C6D/tM4g2pOc2LS+acj3+uwxAExzNr4HfAAQpUFEllo37KavTvw3AMNe8EJj0ik13fWXWEcAgDfT64PiZusOokHGvbqt9z1D/cMeA4A6+v789NAYoQlxPOsIYNc9/yJfse6g/BOV77pr3UC83VEdabduIBos5ISGPLbvMQAI5AP5yaEx4rery5duso4AABF8EcB+1h1k4p3ql33cOgIATiif0Q3g79YdRAOpDv3L/eCLADkAUOoUq6wTAODihy8/WKGfsO4gO6L44nnrmyZadzRLs6/ALdYdRHsQ7GMA2HkhzUn56qHC54sTiAEg0Z/4AgDzH/5k6pDx2/uusI7YpcM6gGiQk4a6WPatAWD+2sVHgkuolLo/rKpc9jfriAs6IwcA2mTdQUGgnx3uaud8khd7YlC8at1B9BbF/m533TsH//VbA0BYkzPzW0SFTIG7rBsAIBzSJkCC83IYMiRHbOntc60rvFovCeA+6w6iPahz/OC/GnANgOz1j0TDEV/MX/wzr7M5LCKftO6gAFF8zjoBAERg/v1BNJBC9/olf8A1AD4HAEpVz9aeSd3WEdPCfzsPwJHWHRQoJ7tddeZPM00kwhwAKFAcYPgBQLkCQKlSrLnz7Gt3WGdAnMXWCRQ8CqfBumF19fXPA3jSuoNot6GO8c7ufwEw5JOCiAZT0QesG9y1dYdDcaZ1BwWPOLg4CLcEivDlQBQoxw++E8ABgIu6Gw8F7wCgVPmO+bP/JelcBiBk3UEBpNh/fG+f+QuhfB9rrRuIBpg8/8HLDx/4Fw4AJH09zqaHCtCOSb7+zjpCgVrrBgowlRrrBD8UMh+UiQYKhZJ7vCtl5ykAxz/WpIYKj8rvotXRXssEd82io4Chn2xFtJOedenDl5quau56TPYLlg1Eexh0rHcAQHy+QY1So47/sHWDhMILgIC8ApaCanxfovQs6whAuQpAwaGy9wAAEa4AUEoEst66QRVnWzdQ8Kmv5gNAEL5fiN6mew8ACvAaAEpNEo9b7n7R3YvKAJ1j2UCFQQRnDPX883xS1Scs90+0B3GGuAYAONoghQpPPw7qecoyYPvEcDWAcZYNVDAOWRCrO9EyIBkKcwCg4FDdcwDY+TIV3gJIKfmzN9PrswwQaLXl/qmwhETmWe5/9Zylz0LwumUD0QD77TrmAwCcEgd7vSGIaCgC2+V/AIDKbOsEKiTGXy8ChS98IiAFxsBjviMhDgCUMtPlf3eDWwpR3v5HKVPAfGAU8f9k3UD0FtG33p/i+BAOAJQSVWy03L/zWtlJAMZbNlDBmT6/67JDLQOsv2+IBhLn7WO+AyjfpkYpEcffZLl/X/W9lvunwuSEQqYXAorjmH7fEA3kY8ApAEflCMsYKhxJDZv+IBNfTrDcPxUm668b9bkCQMEhOmAAUKjp8hgVjOTUCeHnLANUlAMApU1g+3UTSipXAChIDtv9BwfAwYYhVDhebpnV0m+bIHxgFaXN+kFn+00ufWFnBlEACN6x+48OgEMMU6hQCP5puft5nc1hQA/f90cSDSbTLffeMqulH4I3LBuI3qJv/9LvAJhqmEKFQvGq5e4PLH3ucEDClg1UsA5rWt9UYlqgtgM00QAHue1uCNg5AISMY6gwbLbcuaNJ3q1CmQq98Waf7eqR2n7/EA3ghI/c/yDg7XcBEO2DWP8GM814/1TA+kucg0wDxHYFjWigvr6+gwEOAJQiAV4zDfDlQNP9U0EL+Wp6qlOhWyz3TzSQQKYBHAAoRSrotdy/I7Y/wKnACUwHSBHZYbl/ooEEzhSAAwClSBXGtwDqJNv9UyFT+JMt9y8KDgAUGAocAHAAoFSpb/oaYMAptd0/FTJVGWcaIDD+/iF6m0C5AkBpcMT2B5gqBwDKnBh//ajx9w/RAOpwBYDS4KiangLwBbb3cVNhE+MVJPMVNKK3OcoBgNKgxg/hESBhuX8qbOKr7dePOHzeCgWGz1MAlBaF6W9QarwCQYVNRG0vwuMpLAoQUacM4ABAqbI+h2p9DQIVNrH9+uEpLAoU8ScCHAAoVcbnUEV1m+X+qbD5xl8/AuEAQAEiHAAoDdZLmOrwWeo0CtZfP3yOBQWIyASAAwClSID9TPfv+HyWOmUsJGr7LotdV10TBYIqBwBKnarta6N9ny9ToVFQ33YFQNR0gCYahKcAKA3Gz+LXsLxguX8qbKXb1PbrR2R/0/0T7YkrAJQGcUwHAAc9mwCoZQMVrFdWnLGix7RAcYjp/on2FAY4AFCq1HYFwJvjbQfwsmUDFSrdZLn3eZ3NYcD2FBrRICGAAwCl7uBmbbb9elH5m+n+qSApHNOvm2nj/nYw+LOWgoUrAJSWcX/qftZ0GVNFn7DcPxUmx/jrxvfDh1run2gIXAGg9CQlMd1y/wJssNw/FSZV33QAcHydYbl/oiFwBYDSI35ohmmAL4+b7p8KkmM8OIroMZb7JxpCCArhAEApU1HTFYDScX3rAfiWDVRwXntPxdFPmxaIHmu6f6JhcACglInqv1ju/8ZTb3wDwB8tG6jQyEPN0mw6NCrkaMv9Ew0hCYFyAKCUKWSmdYOIPmTdQIVDgbXWDVCYf98QDZIAuAJA6ZlpfSugr4hZ7p8KjcYt9+52NUwDcLBlA9EQkgAHAEpP2ePxZ2dYBkhC7gGfCEip6el5c7LpipGInGS5f6JhcAWA0ieqJ1ru36uOvgSAdwNQKh648+xrd5gWGH+/EA2DKwCUPnHwAfMGyF3WDRR8Ar3bukFFZ1k3EA2BKwCUAdXZ1gkieot1AwWeryG91ToCgPn3C9EQtgMcACh9p7jtbsgyYGV5dB2AZy0bKPAe8uYsN30F8IXdi94B4CjLBqJhbAM4AFD69sPBZcebFghUFKtNGyjQVNBh3RBW51TrBqIhiXAFgDLk2J8GUNEbrBsoqDQRhtNuXQGVudYJRENS5QoAZcr+B5tX2fYogD9Yd1AQyZ03Vyz7u3UFgI9YBxANTbkCQJnS060fCAQAqlhq3UDBI4pl1g0XdzYdBIC3AFIwqcMVAMqUHLQh/sz7rStKpe8GAD3WHRQoLxwwsfQ31hHJkh0fBn++UkCp+D0Av0ApQyrO6dYNN1XetEWBqHUHBYcA17bMaum37oA651gnEA1PNgMcAChDonqGdQMAhOD/L/iKYNqpR0OhX1hHuO1uSOGfbd1BNCzB6wAHAMqYlu86z2lqZeXyPwP4tXUH2RPBMm/O0s3WHThs8mxAzL83iIYjPl4DOABQxiScKNnxMesKAPB9/xvgC4KKXa86/lXWETv551sXEI1EIVsADgA0Gio11gkAsGru8v8D8CvrDrKjkBbrJ//tDgHgWmcQjcSBzwGARu0jl8QumWIdAQC++l8HrwUoVtvCIoH47b+mq2E2FDOsO4hG4oOnAGj0Svq1NBCnAVZVLX+MdwQUJwGuDsiDfyDiX2zdQLQvCn0F4ABAoyWot07YzdfEVwHdat1B+aTPj9uWvNq6AgCa1jeVQITL/xR4paWl/wB2DgBJ4xYqbHPdtYuPtY4AgNVVN7woKt+17qD8EXW+vOKMFYF4GNSW7b3nAjjYuoNoH/zEs6//E9g5APzTOIYKm6ifbLCO2E2n9vwAwAbrDsqLB9srW2+0jniLOpdbJxCl4BWv1ksCOweAfxjHUIETReO8zuawdQcAeDO9Ph+yGLwgcKzbjlDoXyHBuP1zfuflR0AQiIdjEY1I8PLuP3IAoGw4ZFrJM4F58tmqytZ1CvzUuoNyR4D/8uYsfdq6Y7dwOHE5gJB1B9E+6YABQCAvWrbQGKHOv1knDLRjQukXADxl3UE5EdMXe35gHbFbpDMyXoFPWHcQpeitO2YcBZ6zLKGxQqsXrKkzf0PgbrfNatnmqFwCoM+6hbJI8Hoogbrd5zCDYFsYlwB4h3UHUWrk2d1/clQ4AFB2hJxQoFYBVla1/k5V/591B2WTfPzm6uhG64qBFPiMdQNRqkT0+d1/dhwoBwDKCoVeNL/rskOtOwbqqGy7GsCt1h00egr5X6+idaV1x0BuLHImgPdadxClSv23j/mOJrkCQFlTGnLCn7WO2INA0VsaAfBn6xQale4DJ5R83jpiCF+1DiBKiw44BdDvcwCgLFIsufjhywP1MBTvtJbXoXIhdj3/mgrOcyFxaltmtfRbhwxUG6+rBlBu3UGUjoHHfOfW6uhrAN4w7KGxpSzRn/iCdcRgXlXrk6paAyBQBxHapzd89c8NyrP+B1I4/O2fCs0bu475AHa/C0Dkr2Y5NBZd4XZGDrGOGKyjqu1+KJqsOyhVmlBH3VVVyx+zLhmsNtb4USg+bN1BlJZBx3oHAEQ1MA/UoDFhIsL4knXEULyqaFRVv2jdQfvkqyDSUd52j3XIXhSi8L9nnUGUrsHH+p0rABwAKPs+sTBW9y/WEUPpqGr7vkC/Zd1Bw1IRfLKjoi04z/kfoDbecBGAk607iNI25AAgwgGAsq3UF+f71hHDaa9s+38C+W/rDtqLAvh8e0X0Z9YhQznrjivHKfSb1h1EmVAHe58CUOU1AJQDio+58chp1hnDaa9s/bwgmKcqipQC+KxXGf2hdchwJk1+4/MAjrHuIMqI7+y9AhBy5C82NTTmKb7vtruBfUlKe2X0Kg4BQaAJAPVeZfQa65LhXLSm4Z2AfNm6gyhj4eTeA8DN5cteBG8FpNx4Hw6bFOgXpewaAhaDtwga0a1QXOBVRldYl4wkKXo1gDLrDqIMvenNXr7H7bS7rgGAAvijRREVAdXvzO+8/AjrjJG0V0aXqepZ4MOC8u1FAPO8qrbfWIeMxI1FzoRgoXUH0Sg8uetY/xZn9x8U2JD/HioSk0MliR9bR+xLR1Xb/Y4TquRdMXnzaMiXU7zKtketQ0bidi6ZBCCQFyUSpUqgTw7+u7cGAEeEKwCUO4qP1cQj860z9mVl+dInSksTJ0OwyrpljFuBUE/lzXNbA/8ocg1v/zaA6dYdRKPhD/FLvvP2Pya5AkA5JYprL1xXN9W6Y19uPPXGN7zyqCuKr+y6OI2yZ5sAi73KaJ03x9tuHbMvbryxQqCfsu4gGjUZYQXAl5K9/pEoyw4L94V+YR2REoG2V0W/4zgyB3yTYLY8CnE+0F4ZXWYdkgq3c8kk+MlWDPg5SVSowsnQE4P/7q0v7NVzlj4Lwev5TaLioxfWxBoarCtStbI8+ggSE08GpAXY8wIaSpUmVPCdKRNKZ3sVy56yrklZybZrIXKsdQbRqAlev7mq9fnBf+0M+AAF8Id8NlFxEug1C7vrC+ZhKl71dVu9ytaPQ6UaQOEcwIJA8YiD0KyOiuhXgvY635EsjEdOhSJi3UGUFYrfD74DABi0tCU+fpe/Iipik31fbnA3uKXWIenwqlrXlCXwPgH+C8A2656A26KKT+OlntkrK5cV3C8WK8uj60RwrXUHUTaI4v+G+vs9BgBfdMgPIsqBU2VL2Q+sI9IVrY72tldGmxHy/2XXaQHfuilYNAFIS8JJvrujKnqtV+slrYsyItD28uhnOATQWDDcsX3QCoBwAKC8UcWVNfH6S607MuHNWf6CV9n6ccfBqYDcad0TAD4UK/2QnOhVtn78lvIVL1sHjdquIUCBn1inEI2Gqv5+qL+Xgf9lXmdzeFp445sAxueligjY5qs/e1XV8sesQ0ZjYTxyqq9oBnCGdUue+QrpUPG/saqibWzeSqyQmnjkWgE+aZ1ClIHeKRNK9xvqGhwZ/BduLLIOwIfykkUE7HxHdTh8ijdn6WbrlNFa0FX33pDIvynkEgDjrHtyR7eKSKuIXrOyvG3sv01UIbXxyI8VWGKdQpQeXe9Vtn1wqH/Z6/5WEazLfRDRACLHwk/ectYdVxb8AXNV1fLH2ivbGsMl4ekQfBlj7xkCv1fFp/sT8s72iuini+LgD+w8HVAR/ZQA11mnEKVDIcMe08OD/8KHrhPIlblNIhpEUVW23xvXQ1E31O0qheaXp17/DwDfg+Kqmu5IBRSLBHohIAdZt6VPnwdklaOyfGVVa/HeKSTQdo1+yu2uF6gE+g2XRLs5Kg8P9297nQJY2F1/jO8LX4ZCNkS+4VW0ft06Ixfcdjekh0ycJw4WQOUMAEdbN43gSYHc6ftY3VHV+tBYGMqyRiFud/1POARQQQiFjvPmLB3ymL7XAACFuPHIPwBMy3UX0RBUgMsL5XGxo7FgTeS4kKOn+3CqBP4cQOxemaz6NEQeguiaUNK5pxBe0mNKITWxyHUiuMI6hWgEr3gV0YOHG+D3HgAAuLH62wA5N7ddRMNKQuRSr6J1pXVIPs3vvPwIpyTxIfH1BBE5QSEnAHo0snsx4TYAf1HokxDncUf1iX4nuW5M3LaXbzsvDPypAh+3TiEamt7uVbadN9y/DjkA1MQavirQb+Yuimif+gVY0F4Zvc06xJRC5scuOyQUcmYgGTocwDQVTIX4B4o6ZSK+A5X9B3z4FgAQ4E2obvYdeVU0+bLjOM/3IbmJB/os4xBAgaZf9Srbvj3cvw69AtDVMBeiD+asiSg1fSr+BR0Vy/mgHQou3iJIASW+zm2f29Y13L8P+ZrLsqSuA9Cbsyqi1JSKOl5NV/1HrEOIhrXrFkEFCuNV11Qseif68tuRPmDIASBaHe0F8EhOkojSUyYiv6ntilxgHUI0LIF2VEQ/zucEUICs23UsH9aQAwAACHRN9nuIMjJOBe1uV0ONdQjRsPiwIAoQVQy79L/bsAMAEOIAQEFSAtGba2L1ddYhRMMS6PEVM64EsNQ6hYqbI07mA8C4bf0PAdjr5QFEhkICidbEGr5qHUI0nGZp9mdWzGgChwCy07/rGD6iIe8C2M2N1ccAqcheE1GWCKKY0vNxb6bXZ51CNCQ+LIjsxLzKaNW+PmiEUwAAFPdmLYcomxQRbCm784LOyAHWKURDEmhHZXSJKn5mnULFRSS1Y/eIA4DjyD3ZySHKAcWHS8J4aOGaRe+xTiEakkBPqJzxSYG2WqdQ8RBkYQDw/97zCIAtWSkiyo13+47z29p4fa11CNFQmqXZb69oWyzAz61bqCi8tuvYvU8jXgMAAG6sYTWgF46+iSjXpGXKhJJPtcxq4cWrFDx8bDDlg2CVVxFN6Zbpka8BACCiPA1ABUKbtvT23efG6460LqHcq41Hzq6JRyqtO1K28xbBJapos06hsUshKV+7t88BQOHfMbocojxSVEGdx91YZJF1CuVGpDMyvibWcI0qbhfFXbXxumrrplQ1S7N/QuWMRg4BlCvhfr071Y/d5ykAAHDjkcegODHzJCITN6G3dIl3Wsvr1iGUHQvW1L3fcZwbABz/9t/qVhU5u6MiGjMLS1OzNjtPxje1KpQPtqLsETzuVUTfm+qH73MFAADE19szLyIycwnG9z3mdtWfYx1Co3PWHVeOc2MN33IcZx32OPgDgEwS1TvceGPBPLOkWZp9fXFrI4AV1i00dqR7rE5pAPDV4QBAhepIiNzuxupvc9fWHW4dQ+lzu+tmT5r85u8A/QqAkqE/SiZB/btqYpF5+WwbDa/WS86smBERyHLrFhobNKS3pfPxqa0A/GPrOgCvZFREFAhyLpLO4zVdDZdDUzv1RbYuXFc31Y01/By+E8dev/UPqUyAX9d21Zfnui1bdq8EqOgN1i1U6PSfeGH7iK//HSzlH4Q1XZGoCOrTjyIKGl2vIp8rpHPGxaRZm50n4s9cJpAfAJiWwSZ6FDi3ozL6YJbTcsZtd0Ny6KRlvCaAMqWKto6qaCSdz0lpBQAARPxfpV1EFEgySxRr3K7IzfO7F0+3rqG31XTXn74hvvFRgbQhs4M/sGsloGZNw5xstuWSV+sluRJAo+Lg1+l+SsorAOetb5o4fnvfywDK0t0JUYD1KnBNstS/+pZTlr9qHVOs3O7I+5DEVRCcnsXNvqm+nNkxt3VtFreZU267G5JDytpUcKl1CxWUnt4Jpe+4bVbLtnQ+Ka1zoW6s3gMkpScMERWYN1VwrTih//bmLN1sHVMs3DWRE9WRrwq0BmmsSKbhDTj+mV758n2+GjUo3HY3hEPLlgO4xLqFCoV2eJVtbrqfldY3nKqsSncHRAVisij+E8nkM7Wx+m9e3Nl0kHXQWOZ2R97nxiKr4OAPAq1Fbg7+ALAffOcut7tudo62n3VerZfEiz11AG6ybqHCkOmxOb0VgM4lkxDe9jKACZnsjKiA7ADQ7otetaqibYN1zFjhxhsroMkvAnIO0vz5M0o94uvZ7XPbuvK4z1Fx292QHjYxKiqXWbdQoPWWlvQffOOpN76R7iem/Q3odjX8CqLnp/t5RAVKAbkLov8zs3zG/c3S7FsHFZrz442TS6GXiOIzgFq+uvkNR3DGyorow4YNadl5d0DZDQpcZN1CAaXya6+q9WOZfGraA0BNvP5SUeGVqlSE9HmF3Ch+8ufe3BXPWNcEnRurPxlwmgD/EkAmWffsUpBDAFcCaFiCS72KaEani9JfAdh5GuAl8G4AKl4+gHtU0SbJibd71ddttQ4Kivndi6eHNHkxVC8F5ATrniEJXvdVzlhV2brOOiVV8zqbw9NCG2+AYKF1CwVKDxITD8n0Z1BG5+DcWORG8ApVIgDYvusUQccOOLf9umLZm9ZB+Ta/e/F0J5k8X0RrASlHfs/tZ6ZAh4CDwptu3HXRJBEA3ORVRjO+ZTSjb9SaWMO5gvSeOUxUBHqheACCe/wQ7l41J/on66BcmNfZHD64ZOOspI+zRXAegPdZN2VE8Dp8/3Svanlaj0+1xCGABlLIeR2VrRm/qyejAaBpfVPJlm19L0IwNdMdExWBZxW4WwQPhvqx9ubq6EbroEy47W4IB5cdj5DMBfSjAOZBsb91V1ZwCKBCpXh1ysTSQ1tmtfRnuomMl+pquiI/FcEVmX4+URF6EcBDALoV+F2y1H88iE8fdNcsOkol/F5H/FkKmQ3gQwAmW3fl0GuOg9NXlkcfsQ5J1bzO5vA7whtvUiDth7/Q2KCKn3VURT8xmm1kPAC43XWz4TsF84hNooB6EcATAB5XkT+L6ibHT27yS3o3enO87bna6fnxxsklfuIoR3AM1DlWBMcocDwE7x0zv92npyCHgGnhZ37Jp7MWKcefM9onXI7qYh03FvkjgHePZhtENKx/QOTvUN0MxT/h6Gaos1mgbyrQC+h2ABB1tvmiOwQYD+jOh3SJUwr194fI/lDZX6BTVHAwFAcDOAK8i2coBTcENK1vKtmyve83AE6zbqG8+pNXGR31MzVGNQDUdNV/QUSuGm0EEVFAvOaLc9qqimXrrUNS5d7btD/G93UDmGndQvmhql/sqGr7/mi3M6rnb5eUlrQByPgCBCKigDnAgX+f21X3IeuQVHmntbwOHxeDP4uLhCZ8JFdkY0ujGgB+eer1/wD07myEEBEFgmJ/iHPXzicZFgZvbvRxVb3GuoPy4q7VVTe8mI0NZeENXLps9NsgIgqUKYDcW0hDgITD3wWQ1vvgqRBl75g76gHglcTRtwF4IQstRERBMgWQ+xZ2Rz5oHZIKb87SzRBts+6gnHpxyoTxGT/4Z7BRDwAPVjcnILI0GzFERAFzgO/j7oVdDR+wDkmFJh2+qG0sE/nFaB78M1gWTgEAIcjPwQtQiGhsmuKL3l8IKwHyj63rAGyx7qCcSCbFyeop96wMADdXLPs7IFlbliAiCpgDfB93LVhT937rkJF4tV4SQMG84IjSILh9dfnSTdncZFYGAABQx/9ZtrZFRBRABzqO88CCeOMs65CRqGKjdQNln/jy02xvM2sDQMectnsB/CVb2yMiCqADHN+/y+2OBPYNiCL6vHUDZZnq08dXTr8325vN2gAAgSrwo6xtj4goiART4aMzqCsBCmdUT3il4BHBj5ql2c/2drM3AADYMaE0Cug/s7lNIqIACuxKgAhKrBsoixSvjtvmR3Ox6awOALfNatkGca7L5jaJiAJp50pA4K4JUNUjrBsoexS4bsUZK3pyse2sDgAAkJDETwDk7DWmREQBMsVR/54gPTFQgBOsGyhrdkgSOfulOusDwC3lK15WgA+jIKJiMQXAXQtjjSdZh5y3vmkigBOtOyg7RHSFVx19KVfbz3RhJj8AABOBSURBVPoAAAAizn8DyPoFC0REwSQH+fA7rVcCxm3vOwfABMsGyhqVpP/DXO4gJwOAV7HsKQC/ycW2iYgCagogdy7oqnuvVYAAF1ntm7Lu9pVzV/wxlzvIyQAAAFD575xtm4gomKY54tznronkfRl+Qbx+JoAL8r1fyg3x9Qe53kfOBgCvqnUNFI/kavtERAE1DQ7uz/cQ4Kh8C7n8pY7yR/FI+9y2rlzvJrdfLA5XAYioKOV1CKiJ118K/vY/ZoiT+9/+gRwPAK/0T18F4XOpiagoTYOD+xd2L87pbXkL1kSOE8hPcrkPyqtn9O/bVuVjRzkdAB6sbk6Ij+/kch9ERAE2zfeTOVsJmN+9eLrj4D4o9s/F9in/VOSqXW91zLmcny86YGJpFMDfcr0fIqKAegccrKldU1+VzY0ujDWeFPKTnQCOzOZ2ydSzMmVra752lvMBoGVWS7+IfCPX+yEiCrAp6uB+Nx750rzO5vCotqSQ2lik0Ye/FsBR2cmjIBDBd72ZXl++9peXK0b171tvAPBUPvZFRBRMEobiu9NKNv6uJtZwLhRpv7Wvtqu+3I1H1iqwFMDEHESSnWd1Ss+yfO4wb6+NrI01XKzQm/K1PyKigHsSghWOhG5fOWfpBgh0r49QyMKuRe9WxzlNIY0AzB83TDmissSrav1pPneZtwGgWZudDfFn/gAIX1RBRLSnLQCeguAFKHYAmAxgKoB3AzjQtIzy4dmtb07+lzvPvnZHPneatwEAAGq76heoSEc+90lERBRkAixur4zmdfkfyPNTo9or21b///bu/zuq+s7j+Ot9JyQBsaegniqtFYRdd0WtLbhiMpMYV/yKVYEBv5IAllPdVat7dutqpamt3WN3Vyvd1i0rmclE0MxNQKu2fkGjJHyxQq2LoLYiFUQpKChtMJCZ+94fEKsuYBIm875fXo9/IM8fPN4Xn3vnXr4dkIiI6CO/25IbnrH4w8V9baRAlb8IICIi2kPllmdq6nMWf7qotwD2SrbXLQcwzuJvExER+cQqN54+ZZ8PgBaBzYcjBLNN/i4REZFPiMotVhd/wOgEAACS7XW/AnCO1d8nIiKyo4vdRON4ywKzT0c6Xv5GAN1Wf5+IiMiG5hyn5AbrCrMB0Fzd9LJCivrSAyIiInvy0+bKeS9ZV5gNAAAoxa56QN+xbCAiIiqibblS7/vWEYDxAFiQWLBdgHrLBiIiomJR4NZFp2bete4AjAcAAOjbO/8bgtXWHURERP1s7Tu54XOtI/YyHwDuFDePvHzLuoOIiKg/qaM3WL30Z1/MBwAAuNWppyF4yLqDiIionzzYUtn4hHXEx/liAACAp86NAIr6JSQiIqIi2O15+BfriE/zzQBoTTS8LpC7rTuIiIgKSYG7WqvTv7fu+DTfDAAAGDBg9+0ANlt3EBERFcjmsgHdP7SO2BdfDYD54+bvUOA66w4iIqKCULl2/rj5O6wz9sXsWwAHkmyvWwTgIusOIiKiPhM86sbTE6wz9sdXJwB75TV3DYD3rDuIiIj6aEe+u+Sb1hEH4ssBsLDqvrdF8K/WHURERH0hgm8vrLn3TeuOA/HlAACAbGX65xA8bd1BRETUKyrLj6/0zxv/9se3AwACddS7GkCXdQoREVEP7QJwVb3Ue9Yhn8W/AwBAcyLzO0B/YN1BRETUM/p9tyq11rqiJ3w9AABga27EHRB5wbqDiIjogASrhwws+5F1Rk/58meAnzZ1ad0pnoflAGLWLURERPvgwfHibmVmuXVIT/n+BAAAmivTz6voHOsOIiKifVHRu4N08QcCMgAAYHC33AzoS9YdREREn6D6mnQfMts6o7cCcQtgr0nPTvuq4zgrAJRatxAREQHohnpxtyrza+uQ3grMCQAAtFZnXlDVW607iIiIAACKW4J48QcCNgAA4ITEiP8A8JR1BxERRZxgCTZ33mmd0VeBugWwV3LZtC8i57wIwWHWLUREFEnbId7JbjyzwTqkrwJ3AgAAbkVmE8T7hnUHERFFk4h+M8gXfyCgAwAA3ERmEYB51h1ERBQtInpvNt6Yte44WIEdAABQvjN/PYBXrTuIiCgy1nUhdqN1RCEEegA0nd3UCejlAHZbtxARUdhpzoNc/ot4w5+sSwoh0AMAANxE4ypAb7PuICKicFNxZrcmUs9ZdxRK4AcAAIyOj/g3AI9bdxARUWg9fkLlMXdYRxRSIH8GuC+XtV82pBulKwEca91CRESh8kZJrnTs/TVz37EOKaRQnAAAwILEgu0OnIkAdlq3EBFRaHQBOilsF38gRAMAAJoTDS+q6CzrDiIiCgeFXLPnWbPwCdUAAICWeON8iN5j3UFERMGmwE9bEqmUdUd/Cd0AAIAh5WXXA2i37iAiosBaIUM7Q/F7//0JzUOAn5ZsqzsSJVgFYJh1CxERBcofEfPGuBWZTdYh/SmUJwAA4NakN6snSfAlQURE1GOag8rUsF/8gRAPAABoqU4tE5WbrDuIiCgYVOSf3arUs9YdxRDaWwAfN7m9doFALrXuICIi/1Lo/S2JxsusO4ol1CcAew3OyQwAy6w7iIjIpxTP7xpYdpV1RjFF4gQAAC5+btphJbud5QD+yrqFiIh8ZX3OyY9bVNm0xTqkmCJxAgAAi07NvOs4ei6ArdYtRETkG9sgzrlRu/gDERoAANBc2bgO4kwE0GXdQkRE5naLeJPdeMOr1iEWIjUAAMCNN3SIaC0Az7qFiIjMqKjMzMYzbdYhViI3AAAgG2/MiuJW6w4iIrKhIrdkq1L3WXdYisxDgPuS7Kj9GVSutu4gIqLiUaChJZGead1hLZInAHsNKS+7HoonrDuIiKhYpE2GdvIffoj4CQAAfL1jxqFl6rUD+Ip1CxER9as13TnEH6xJv2cd4geRHwAAkFw27YvIO0sAHGvdQkRE/eJ1xLyqKLzjv6cifQtgL7ciswni1QB4w7qFiIgKbhO8/Jm8+H8SB8CH3Hhmg+dhPIDN1i1ERFQwW6FyllvdtN46xG84AD6mtTr9e3g4C4p3rVuIiOggCd53VM5xq1JrrVP8iAPgU9zq9GpPvfEA+JAIEVFwdQLOhOaq1G+sQ/yKA2AfWqszL6gn5wPotG4hIqJe+0CBCW68ocM6xM84APajpTq1TOBcBH43gIgoSHZDNdmSSD9jHeJ3HAAHkE00LFaVSwB0W7cQEdFnyovolW5V46PWIUHAAfAZWqpSD0FQB348iIjIzzxRqcvGG7PWIUHBAdADbjy9QBWXgycBRER+lIdiZtQ/7tNbfBNgL0xunz5BoC6AcusWIiICAOwW1cuyVY2t1iFBwwHQS1M6ptWoyi8AGWzdQkQUcTsBTHIT6cesQ4KIA6APJnfUJUTxCIDPWbcQEUVUp6pe2FLV+JR1SFBxAPRRsr12DIDHADncuoWIKGLeg+Od51ZmlluHBBkfAuwjN9G4CupUA3jLuoWIKEK2OHBO58X/4PEE4CAlO2YcB/WeBHC0dQsRUci97YmOb403rrEOCQMOgAKYuHTmMbF8bjFERlm3EBGFkuAPjuiZzZWN66xTwoK3AApgYeW8N1Cip0Ow2rqFiCh0BKvheHFe/AuLA6BA3IrMJnQPqoCAr6AkIioYXYwPShNuRWaTdUnYcAAUkFvzsz/jrc4LIXqPdQsRUdAJNDVkYNl57vi571u3hBGfAegnyfa66wHcCY4sIqLeUgFuyybS9dYhYcYB0I+SS6ZPhmgGwEDrFiKigNilojNb4o3zrUPCjgOgnyWXTjsNnvMQgCOsW4iIfG4bVCa6ValnrUOigAOgCKYurR3pefIogOOsW4iIfOp1L4bzWyvSr1iHRAXvTxdBc2XjOsRiFQDarVuIiHxoRc7Jn8aLf3FxABSJWzFvG2KdZyv0fusWIiK/UOj9iHWesaiyaYt1S9TwFoCBZHvtLED+C8AA6xYiIhuaE8h3son0HdYlUcUBYCTZMSMO9bIAjrJuISIqsq2qeik/5WuLA8DQJR0zhuXVcwFUWLcQERWHroToJDee2WBdEnV8BsDQA/GGt7bmhlcrwCMwIooAmYuhOyt58fcHngD4xOSO2stFZS6AQdYtREQF1gXRf3TjjfOsQ+gvOAB8JLm07mR4aAVwrHULEVGBbHQcTGquTD9vHUKfxFsAPuJWpn+LWOwUAI9btxARHTxpyzn5sbz4+xMHgM+4FfO2jY4PP09FbgbQbd1DRNQH3Spy8+j4MWfy9/3+xVsAPjapY8ZYR735AP7auoWIqIfWqydXtFSnllmH0IHxBMDHWuMNKxHrPFkhc6xbiIh6oAm5QSfx4h8MPAEIiGT7tIuhzv9AcJh1CxHRJwjeF5Wrs4kUX3UeIBwAAXLpiqu+kOvOpwA917qFiAgAIHg6311Su7Dm3jetU6h3OACCRiHJjrrrsOflQWXWOUQUVZoTyO3Hx4ffVi/1nnUN9R4HQEBNXTrzBE/zC6A40bqFiCLnFUfl8uaq1G+sQ6jv+BBgQDVXznupq7x0nIreBSBv3UNEkZAXxY+7BpaO4cU/+HgCEAIfvkHwXgBjrFuIKKz0JQ/OVa2J1HPWJVQYPAEIAbcy/dutueHjBLgJQJd1DxGFSrcCd2DozjG8+IcLTwBCZurS2pGeylwozrBuIaLAW+p4+W80Vze9bB1ChccBEEYKmdxRe6VA7gIw1DqHiAJnB4DZo+PDf8In/MOLAyDEJi654qiYU/ITKCZZtxBRQAgejeXl6geqUxutU6h/cQBEwOT2uqQAcwAcad1CRL61WYHrWhJp1zqEioMPAUZASyLtlu/MjxLgewB2W/cQka90K2QOukr/hhf/aOEJQMQkO2YcB/XuBnC2dQsRWdPFjuddx4f8ookDIKKmtNddoII5UAy3biGiontFBP+Ujad/aR1CdngLIKKyifTDXeWloz98d8AO6x4iKortAL61NTf8RF78iScAhEvbZh3eXdJ9q0D/AUDMuoeICk1zgNMAxXfcqtRW6xryBw4A+sjUZ6/8Wy8W+3cozrduIaKCeQoebnCr06utQ8hfOADo/5myZPrZKno7+G0BoiBbJSq3ZKtSj1uHkD9xANC+KWRKR90EBX4A4CTrHCLqsVcV+sMT4iPu41v86EA4AOiATm+rLzliwPpaqHwXwNHWPUS0XxsE+N6W3PDMMzX1OesY8j8OAOqR5JpkqW4bdIlAvgvgWOseIvrIRgD/eUgOP0/XpPk1UOoxDgDqlY8NgdkARlr3EEUYL/x0UDgAqE+Sa5Klun3wdIHexJcJERXVehW5Q4b8OeWOdvlqb+ozDgA6KPVa76zt+MP5Cp0NyFjrHqLQEnlB1fvxO7kRC3iPnwqBA4AKJtkxIw7NfxuQCdYtRCGhgD4lkDnZRPph6xgKFw4AKrjJz06vkJjeCMVF4JsFifqiS4EmjeHO1or0K9YxFE4cANRvLumYMcxTb5YC1wIYat1D5HuC91WlUWL5H7kVmU3WORRuHADU777eMePQcs1PV8W1EBll3UPkQ+sEelfZTi/ddHZTp3UMRQMHABXNngcGN5wBeLMUejEgJdZNRIY8QJ9WyFx5u3OhO8XNWwdRtHAAkImJS644qkRKpilwDYAvW/cQFdFmBRo9J3bPwsp5b1jHUHRxAJCpWStnDdj+QdcEwJkO6Lk8FaBw0hwgvwK81JCB5Y/MHTu327qIiAOAfCPZVnckSjAVwHQAX7HuISqAVwV4QMVrcOOZDdYxRB/HAUC+lFw67TTNO9MESEJwmHUPUY8p3oWjWYg2uZWZ5dY5RPvDAUC+lswmY3LUoTUKbxr2PDg42LqJaB+6AF2skIwM7XyIr+ilIOAAoMBItl0zWAd0XigqUwGMB1Bu3USR1gWVJ9TxsgM7vQf58z0KGg4ACqQLVs4aNPCD3X+vQBLARQAOtW6iSPgA0KcUcMsG5B6cP27+Dusgor7iAKDAu2DlrEFlXbvPcVQuVHjnAXK4dROFib4jcH7piT60q7z0sYfHzt1pXURUCBwAFCr1Wu+s6Vj/VYFcoMAEAF8D/zun3ntdIY84kIe35L78DL++R2HE/zFSqE1cOvOYEs2fq4rxAM4A8HnrJvKl7RA8rZAnPXEe4wt6KAo4ACgyktlkzBl2yCkKjFfVswA5FcAA6y4y0Q1ghQieFOBJ763O5/kqXooaDgCKrAtWzhpU3pX7mqhXqdAzAYmDvywIKc0B8qICix1gqXaVLnHHz33fuorIEgcA0Yfq2urKdzr6d57jVAm8Uz88ITjCuov6ZCugzwFYIR7aB3ny63RNuss6ishPOACIDiC5bOYoyXnjdO8gEJwEoMy6iz5hF6CroVghcJ7TEmeFWzHvNesoIr/jACDqhdPb6ksOG7D+OFGMAeR4gY4GMI4/PSyaPwH4X4WsEnhrILG1h3R7K/mve6Le4wAgKoBLOmYM8xTHK7zRgByPPcPgJPAFRX21C8A6AdYAWOsBa1R07YmVI16ul3rPOo4oDDgAiPrRxLarvhSL5UfC8UZBZRSgoyDOSKiOBPA56z5jOyCyTlRfU2AdRF+D57yWz8fWLay5903rOKKw4wAgMnJRW93ny0pjX/LyuWPEkaM94GhRHA1gGKBfAOQI7HkI0TFO7S0Pex7C2wrIHwG8pYKNDrBRPd3oxEre2LU7/+aDNen3rEOJouz/ANuBdbb7IFs7AAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
          </button>
        </div>
        <div className="btm absolute w-[80%] h-[85px] px-4 -bottom-1 bg-white shadow-lg left-[50%] rounded-2xl -translate-x-[50%] -translate-y-[50%]  ">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center gap-7 py-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-3xl  px-28 text-[#0000008a] border-[#55C360] border-2 py-[25px]"
                  >
                    All Subjects
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Subject</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-3xl px-28 text-[#00000089] border-[#55C360] border-2 py-[25px]"
                  >
                    Orders Completed
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Subject</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-3xl px-28 text-[#0000008a] border-[#55C360] border-2 py-[25px]"
                  >
                    All Ratings
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Subject</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <button
              type="submit"
              className=" bg-[#55C360] hover:bg-green-700 text-white font-bold py-3 px-12 rounded-[50px] focus:outline-none"
            >
              search
            </button>
          </div>
        </div>
        <div className="container h-full px-4 lg:w-[1400px] mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="w-full flex items-center justify-between pt-4 pb-4 relative">
            <div className="flex flex-col gap-5 pt-5 pl-12 pr-4 w-2/4">
              <div className="flex flex-col gap-5 ">
                <div className="font-poppins max-w-2xl break-words hyphens-auto leading-[65px] text-[65px] font-bold text-black mb-2">
                  {changeInH ? (
                    <div>{changeInH}</div>
                  ) : (
                    <div>
                      Top Assignment Experts, Ready <br />
                      to Help
                    </div>
                  )}
                </div>
                <div className="mb-8 font-poppins font-normal text-[#5F5F5F] text-lg leading-8">
                  {changeInP ? (
                    <p>{changeInP}</p>
                  ) : (
                    <p>
                      Review their expertise, ratings, and feedback choose{" "}
                      <br />
                      the perfect expert for your assignment needs <br />
                      ensuring high-quality results every time.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}