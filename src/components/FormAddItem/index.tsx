import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import { actionsModal } from '../../store/items/actionsItems';
import { itemsAPI } from '../../api/api';
import * as Yup from 'yup';

import './index.scss';
import { AddItemType } from '../../entities/apiTypes';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Name is required'),
  author: Yup.string().required('author is required'),
  publish: Yup.string()
    .matches(/^\d{4}$/, 'Year must contain 4 digits')
    .required('Year publish is required'),
  rating: Yup.number()
    .min(1)
    .max(5)
    .required('Rating is required')
    .positive()
    .integer(),
});

const postItem = (values: AddItemType) => {
  itemsAPI.addItem(values).then((res) => {
    console.log('res', res);
  });
};

const FormAddItem = (props: PropsType): JSX.Element => {
  const { closeModal } = props;

  return (
    <div className="formItem">
      <h1 className="title">Item form</h1>
      <Formik
        initialValues={{
          title: '',
          author: '',
          publish: '',
          rating: 1,
        }}
        onSubmit={(values, actions) => {
          postItem({
            title: values.title,
            author: values.author,
            publish: values.publish,
            rating: values.rating,
          });

          actions.setSubmitting(false);
          closeModal();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder='Enter "title"'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && <div>{errors.title}</div>}
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                placeholder='Enter "author"'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              {errors.author && touched.author && <div>{errors.author}</div>}
            </div>
            <div>
              <label htmlFor="publish">Year publish</label>
              <input
                placeholder='Enter "year publish"'
                type="number"
                name="publish"
                maxLength={parseInt('4')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.publish}
                min="1000"
              />
              {errors.publish && touched.publish && <div>{errors.publish}</div>}
            </div>

            <div className="rating-input">
              <label htmlFor="rating">Rating</label>
              <Field
                name="rating"
                as="select"
                type="rating"
                value={values.rating}
                onChange={handleChange}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Field>
            </div>

            <button
              style={{ height: '60px' }}
              className="btn btnPrimary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button
              style={{ height: '60px' }}
              className="btn btnSecondary"
              type="button"
              onClick={() => resetForm()}
            >
              Reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  closeModal: actionsModal.closeModal,
};

export default connect(null, mapDispatchToProps)(FormAddItem);

type PropsType = {
  closeModal: () => void;
};
