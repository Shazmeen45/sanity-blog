import {PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';

export const Components: PortableTextComponents = {
    block: {
        h5: ({children}) => <h5 className='text-xl font-serif ml-6'>{children}</h5>,
        normal: ({children}) => <p className='mx-10'>{children}</p>
    },
    marks: {
      strong: ({ children }) => <strong className="text-lg font-serif ">{children}</strong>,
    },
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <div className="my-image-container">
            <Image
              src={urlFor(value).url() ?? ''}
              alt="Blog image"
              width={900}
              height={100}
              layout="intrinsic"
              className='mx-auto my-10'
            />
          </div>
        )
      },
      callToAction: ({ value, isInline }: { value: any, isInline: boolean }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    }
}
