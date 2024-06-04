
'use client'

export default function ChekckOutForm({ fromInfo, setFormInfo }) {
  return (
    <div className="space-y-4">
      <div>
        <div>
          <label htmlFor="first-name" className="text-gray-600">
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            onChange={(e) =>
              setFormInfo({
                ...fromInfo,
                name: e.target.value,
              })
            }
            value={fromInfo.name}
            type="text"
            name="first-name"
            id="first-name"
            className="input-box"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="text-gray-600">
          Phone number <span className="text-primary">*</span>
        </label>
        <input
          onChange={(e) =>
            setFormInfo({
              ...fromInfo,
              phone: e.target.value,
            })
          }
          value={fromInfo.phone}
          type="text"
          name="phone"
          id="phone"
          className="input-box"
        />
      </div>
      <div>
        <label htmlFor="address" className="text-gray-600">
          Address <span className="text-primary">*</span>
        </label>
        <textarea
          onChange={(e) =>
            setFormInfo({
              ...fromInfo,
              address: e.target.value,
            })
          }
          value={fromInfo.address}
          type="text"
          name="address"
          id="address"
          className="input-box"
        />
      </div>
    </div>
  );
}
