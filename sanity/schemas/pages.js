import { string } from "prop-types";
import { FiFileText } from 'react-icons/fi';

export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    icon: FiFileText,
    fieldsets: [
        {name: 'hero', title: 'Hero'},
        {name: 'interlude', title: 'Interlude'},
        {
            name: 'category_overrides',
            title: 'Category Overrides',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: true, // Defines if the fieldset should be collapsed by default or not
                columns: 1 // Defines a grid for the fields and how many columns it should have
            }
        },
      ],
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: {type: 'category'}
        },
        {
            name: 'label',
            title: 'Page Label',
            discription: '',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: doc => `${doc.label}`
            }
        },
        {
            name: 'hero_banner',
            title: 'Banner',
            type: 'image',
            description: 'Background image for hero section.',
            fieldset: 'hero'
        },
        {
            name: 'hero_title',
            title: 'Title',
            description: '',
            type: 'string',
            fieldset: 'hero'
        },
        {
            name: 'hero_sub_title',
            title: 'Sub Title',
            description: '',
            type: 'string',
            fieldset: 'hero'
        },
        {
            name: 'hero_content',
            title: 'Content',
            description: 'Optional content for hero section.',
            type: 'string',
            fieldset: 'hero'
        },
        {
            name: 'intro',
            title: 'Intro',
            type: 'portableText',
        },
        {
            name: 'interlude_text',
            title: 'Text',
            type: 'array',
            of:[{type: 'text'}],
            fieldset: 'interlude' 
        },
        {
            name: 'interlude_image',
            title: 'Image',
            type: 'image',
            fieldset: 'interlude' 
        },
        {
            name: 'company_overrides',
            title: 'Company Overrides',
            type: 'companyInfo',
            description: '',
            fieldset: 'category_overrides'
        },
        {
            name: 'service_area_overrides',
            title: 'Service Area Override',
            type: 'reference',
            to: [{type: 'serviceArea'}],
            fieldset: 'category_overrides'
        }
    ],
    preview: {
        select: {
            category: 'category',
            label: 'label',
            slug: 'slug',
        },
        prepare: (fields) => {
            return {
                title: fields.label,
                subtitle: `/${fields.slug.current}`,
            }
        }
    }
}