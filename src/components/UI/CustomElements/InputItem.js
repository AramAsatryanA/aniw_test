function InputItem({ id, title, type, placeholder }) {
  return (
    <div className="flex flex-col justify-between gap-2 lg:flex-row">
      <label htmlFor={id} className="text-sm lg:pt-3">
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={3}
          placeholder={placeholder}
          className="input-type lg:w-[492px]"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="input-type lg:w-[492px]"
        />
      )}
    </div>
  );
}

export default InputItem;
