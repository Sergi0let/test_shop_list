import { Field, Formik } from 'formik';
import { connect } from 'react-redux';
import { actionsModal } from '../../store/items/actionsItems';

import * as Yup from 'yup';

import './index.scss';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Name is required'),
  author: Yup.string().required('author is required'),
  publish: Yup.string().min(4).max(4).required('Year publish is required'),
  rating: Yup.number()
    .min(1)
    .max(5)
    .required('Rating is required')
    .positive()
    .integer(),
});

// console.log('validationSchema', validationSchema);

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
          console.log(values);
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              {errors.author && touched.author && <div>{errors.author}</div>}
            </div>
            <div>
              <label htmlFor="publish">Year publish</label>
              <input
                type="number"
                name="publish"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.publish}
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
                  <option key={i}>{i + 1}</option>
                ))}
              </Field>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button type="button" onClick={() => resetForm()}>
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
